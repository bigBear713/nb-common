import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class UnsubscribeService implements OnDestroy {

  private destroy$ = new Subject<void>();

  private subscriptionList: Subscription[] = [];

  private subscriptionMap: Map<string, Subscription> = new Map();

  constructor() { }

  /**
   * adding an auto unsubscribing operator for the observable,
   * so the observable will auto be unsubscribed when the service instance is going to be destroied
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
   * the subscriptions added by key before will all be unsubscribed and cleared from the record,
   * only for the record which added by key
   */
  clearAllSubscriptionsFromKeyRecord(): void {
    this.subscriptionMap.forEach((item, key) => {
      item.unsubscribe();
      this.subscriptionMap.delete(key);
    });
  }

  /**
   * the subscription will be added to record, 
   * and auto be unsubscribed when the service instance is going to be destroied
   * @param subscription the subscription of observable which wish to be auto unsubscribed
   */
  collectASubscription(subscription: Subscription): void {
    this.subscriptionList.push(subscription);
  }

  /**
   * the subscription will be added to record via key,
   * and you can unsubscribe it at any time via key,
   * or they will auto be unsubscribed when the service instance is going to be destroied
   * @param key 
   * @param subscription 
   */
  collectASubscriptionByKey(key: string, subscription: Subscription): void {
    this.subscriptionMap.set(key, subscription);
  }

  /**
   * an observable signal that the service instance is going to be destroied, 
   * you can unsubscribe an observable at the rignt time by using it and takeUntil operator
   * @returns 
   */
  getDestructionSignal(): Observable<void> {
    return this.destroy$.asObservable();
  }

  /**
   * ubsubscribe the subscription which getting via key,
   * will be removed from the record after unsubscribing
   * @param key 
   * @returns false when can't get the subscription via key
   */
  unsubscribeByKey(key: string): boolean {
    const subscription = this.subscriptionMap.get(key);
    if (!subscription) {
      return false;
    }
    subscription.unsubscribe();
    return this.subscriptionMap.delete(key);
  }

  /**
   * the function will auto be called when the service instance is going to be destroied,
   * so the service should be provided in component/directive providers
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearAllSubscriptions();
    this.clearAllSubscriptionsFromKeyRecord();
  }
}
