import { inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbValueTypeService } from './value-type.service';

@Injectable()
export class UnsubscribeService implements OnDestroy {

  private destroy$ = new Subject<void>();

  private subscriptions = new Subscription();

  constructor() { 
    // make it be created easier, so devr can create an instance to use when needed
    // should test it can work well
    const valueTypeService = inject(NbValueTypeService);
    console.log(valueTypeService);
  }

  // handle the case which getting the observer's subscription
  collectSubscriptions(subscription: Subscription): void {
    this.subscriptions.add(subscription);
  }

  // handle the case which using takeUntil to unsubscribe
  subscribeDestructionSignal(): Observable<void> {
    return this.destroy$.asObservable();
  }

  // handle the case which don't want to import takeUntil operator to unsubscribe by self
  unsubscribe(observable: Observable<any>): Observable<any> {
    return observable.pipe(takeUntil(this.destroy$));
  }

  // it should be public, so devr can unsubscribing by self when needed, such as in pipe
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.unsubscribe();
  }
}
