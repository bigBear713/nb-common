import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class UnsubscribeService implements OnDestroy {

  protected destroy$ = new Subject<void>();

  protected subscriptionList: Subscription[] = [];

  protected subscriptionMap: Map<string, Subscription> = new Map();

  /**
   * Should be provided in component/directive's providers.
   * If you want to new an instance by yourself, such as in pipe, 
   * remember to call the sevice instance's ngOnDestroy function when you don't need it, 
   * such as in pipe's ngOnDestroy function
   */
  constructor() { }

  /**
   * adding an auto unsubscribing operator for the observable,
   * so the observable will auto be unsubscribed when the service instance is going to be destroyed
   * @param observable 
   * @returns the observable with auto unsubscribing operator
   */
  addUnsubscribeOperator<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(takeUntil(this.destroy$));
  }

  /**
   * the subscriptions added before will all be unsubscribed and cleared from the record,
   * excluding the record which added by key
   */
  clearAllSubscriptions(): void {
    this.subscriptionList.forEach(item => item.unsubscribe());
    this.subscriptionList.length = 0;
  }

  /**
   * the subscriptions added via key before will all be unsubscribed and cleared from the record,
   * only for the record which added via key
   */
  clearAllSubscriptionsFromKeyRecord(): void {
    this.subscriptionMap.forEach((item, key) => {
      item.unsubscribe();
      this.subscriptionMap.delete(key);
    });
  }

  /**
   * the subscription will be added to record, 
   * and auto be unsubscribed when the service instance is going to be destroyed
   * @param subscription the subscription of observable which wish to be auto unsubscribed
   */
  collectASubscription(subscription: Subscription): void {
    this.subscriptionList.push(subscription);
  }

  /**
   * the subscription will be added to record via a key,
   * and you can unsubscribe it at any time via the key,
   * or they will auto be unsubscribed when the service instance is going to be destroyed.
   * If there is a subscription matching the key before adding the new subscription, 
   * it will be unsubscribed first by default
   * @param key 
   * @param subscription 
   * @param unsubscribeIfExist whether to unsubscribe if there is a subscription matching the key. Default is true
   */
  collectASubscriptionByKey(key: string, subscription: Subscription, unsubscribeIfExist: boolean = true): void {
    if (unsubscribeIfExist) this.unsubscribeASubscriptionByKey(key);
    this.subscriptionMap.set(key, subscription);
  }

  /**
   * an observable signal that the service instance is going to be destroyed, 
   * you can use it and takeUntil operator to unsubscribe an observable at the rignt time 
   * @returns 
   */
  getDestructionSignal(): Observable<void> {
    return this.destroy$.asObservable();
  }

  /**
   * ubsubscribe the subscription which getting via key,
   * will be removed from the record after unsubscribing
   * @param key 
   * @returns false when can't get the subscription matching the key
   */
  unsubscribeASubscriptionByKey(key: string): boolean {
    const subscription = this.subscriptionMap.get(key);
    if (!subscription) {
      return false;
    }
    subscription.unsubscribe();
    return this.subscriptionMap.delete(key);
  }

  /**
   * the function will auto be called when the service instance is going to be destroyed,
   * so the service should be provided in component/directive providers.
   * 
   * If you need to unsubscribe all subscriptions, like used in pipe, also can call it by yourself.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearAllSubscriptions();
    this.clearAllSubscriptionsFromKeyRecord();
  }
}
