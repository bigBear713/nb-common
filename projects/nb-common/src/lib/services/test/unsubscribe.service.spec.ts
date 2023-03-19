import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { UnsubscribeService } from '../unsubscribe.service';

class PublicUnsubscribeService extends UnsubscribeService {
  public destroy$ = new Subject<void>();
  public subscriptionList: Subscription[] = [];
  public subscriptionMap: Map<string, Subscription> = new Map();
}

describe('Service: Unsubscribe / ', () => {
  let service: PublicUnsubscribeService;
  beforeEach(() => {
    service = new PublicUnsubscribeService();
  });

  afterEach(() => {
    service.ngOnDestroy();
  });

  it('should be created', () => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    const service = component.unsubscribeService;
    expect(service).toBeTruthy();
  });

  it('#addUnsubscribeOperator() - will add an auto unsubscribing operator for observable', fakeAsync(() => {
    const subscriber = { next: () => { } };
    const spyOn = spyOnAllFunctions(subscriber);
    service.addUnsubscribeOperator(interval(100)).subscribe(subscriber);

    tick(300);
    expect(spyOn.next).toHaveBeenCalledTimes(3);

    service.ngOnDestroy();
    tick(300);
    expect(spyOn.next).toHaveBeenCalledTimes(3);
  }));

  describe('verify the collect func and clear all func / ', () => {
    [
      {
        title: '#collectASubscription() and #clearAllSubscriptions()',
        funcs: {
          collectFn: (...args: any[]) => service.collectASubscription(args[0]),
          clearAllFn: () => service.clearAllSubscriptions(),
        },
        getRecordSizeProp: () => service.subscriptionList.length
      },
      {
        title: '#collectASubscriptionByKey() and #clearAllSubscriptionsFromKeyRecord()',
        funcs: {
          collectFn: (...args: any[]) => {
            let index: number | undefined;
            for (let i = 0; index === undefined; i++) {
              if (service.subscriptionMap.get(`key${i}`)) {
                break;
              }
              index = i;
            }
            return service.collectASubscriptionByKey(`key${index}`, args[0]);
          },
          clearAllFn: () => service.clearAllSubscriptionsFromKeyRecord(),
        },
        getRecordSizeProp: () => service.subscriptionMap.size
      },
    ].forEach(item => {
      it(item.title, fakeAsync(() => {
        const interval1$ = interval(100);
        const interval2$ = interval(200);
        const subscriber1 = { next: () => { } };
        const spyOn1 = spyOnAllFunctions(subscriber1);
        const subscriber2 = { next: () => { } };
        const spyOn2 = spyOnAllFunctions(subscriber2);

        // verify the #collectFn()
        item.funcs.collectFn(interval1$.subscribe(subscriber1));
        item.funcs.collectFn(interval2$.subscribe(subscriber2))
        expect(item.getRecordSizeProp()).toEqual(2);

        tick(400);
        expect(spyOn1.next).toHaveBeenCalledTimes(4);
        expect(spyOn2.next).toHaveBeenCalledTimes(2);

        // verify the #clearAllFn()
        item.funcs.clearAllFn();
        tick(400);
        expect(spyOn1.next).toHaveBeenCalledTimes(4);
        expect(spyOn2.next).toHaveBeenCalledTimes(2);
        expect(item.getRecordSizeProp()).toEqual(0);
      }));
    })
  });

  describe('#collectASubscriptionByKey() - using a old key to collect a new subscription / ', () => {
    [
      {
        title: 'unsubscribeIfExist is undefined',
        unsubscribeIfExist: undefined,
        expectResult: {
          isClosed: true,
          calledTimes: 4,
        }
      },
      {
        title: 'unsubscribeIfExist is true',
        unsubscribeIfExist: true,
        expectResult: {
          isClosed: true,
          calledTimes: 4,
        }
      },
      {
        title: 'unsubscribeIfExist is false',
        unsubscribeIfExist: false,
        expectResult: {
          isClosed: false,
          calledTimes: 6,
        }
      }
    ].forEach(item => {
      it(item.title, async () => {
        const interval$ = interval(100);
        const subscriber1 = { next: () => { } };
        const spyOn1 = spyOnAllFunctions(subscriber1);
        const subscription1 = interval$.subscribe(subscriber1);
        const subscription2 = interval$.subscribe();
        const key = 'interval';

        service.collectASubscriptionByKey(key, subscription1, item.unsubscribeIfExist);

        await myTick(400);
        service.collectASubscriptionByKey(key, subscription2, item.unsubscribeIfExist);
        expect(subscription1.closed).toEqual(item.expectResult.isClosed);

        await myTick(200);
        expect(spyOn1.next).toHaveBeenCalledTimes(item.expectResult.calledTimes);

        subscription1.unsubscribe();
        subscription2.unsubscribe();
      });
    });

  });

  it('#unsubscribeASubscriptionByKey() - unsubscribe and remove a subscription from key record', (() => {
    const interval1$ = interval(100);
    const interval2$ = interval(200);

    service.collectASubscriptionByKey('k1', interval1$.subscribe({ next: () => { } }));
    service.collectASubscriptionByKey('k2', interval2$.subscribe({ next: () => { } }))
    expect(service.subscriptionMap.size).toEqual(2);

    // verify the #unsubscribeASubscriptionByKey()
    let unsubscribeResult = service.unsubscribeASubscriptionByKey('k3');
    expect(unsubscribeResult).toEqual(false);
    expect(service.subscriptionMap.size).toEqual(2);

    unsubscribeResult = service.unsubscribeASubscriptionByKey('k1');
    expect(unsubscribeResult).toEqual(true);
    expect(service.subscriptionMap.size).toEqual(1);
  }));

  it('#getDestructionSignal() - get an observable destructionSingal', fakeAsync(() => {
    const destructionSingal = service.getDestructionSignal();
    const isObservable = destructionSingal instanceof Observable;
    const isSubject = destructionSingal instanceof Subject;

    expect(isObservable).toBeTrue();
    expect(isSubject).toBeFalse();

    const subscriber = { next: () => { } };
    const spyOn = spyOnAllFunctions(subscriber);
    destructionSingal.subscribe(subscriber);

    service.ngOnDestroy();
    tick(100);
    expect(spyOn.next).toHaveBeenCalledTimes(1);
  }));

});

@Component({
  standalone: true,
  template: '',
  providers: [UnsubscribeService]
})
export class TestComponent {
  constructor(public unsubscribeService: UnsubscribeService) { }
}

async function myTick(time: number) {
  return await new Promise(resolve => setTimeout(() => resolve(null), time));
}