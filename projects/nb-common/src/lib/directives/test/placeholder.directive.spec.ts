import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbUnsubscribeService } from '../../services/unsubscribe.service';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { NbPlaceholderDirective } from '../placeholder.directive';

const STR_PLACEHOLDER = 'this is a string placeholder';
const OBSERVABLE_PLACEHOLDER = 'this is a observable placeholder';

@Component({
  selector: 'mock-component',
  template: `<input [nbPlaceholder]="placeholder">`
})
class MockComponent {
  placeholder: string | Observable<string> = '';
}

describe('Directive: NbPlaceholder', () => {
  [
    {
      title: 'imported by ngModule',
      imports: [NbCommonTestingModule]
    },
    {
      title: 'imported by standalone component',
      imports: [NbPlaceholderDirective]
    },
  ].forEach(item => {
    describe(item.title, () => {

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [...item.imports],
          declarations: [MockComponent],
          providers: [
            { provide: ChangeDetectorRef, useValue: jasmine.createSpyObj(ChangeDetectorRef, ['markForCheck']) }
          ]
        });
      });

      it('create an instance', () => {
        const service = TestBed.inject(NbValueTypeService);
        const unsubscribeService = new NbUnsubscribeService();
        const changeDR = TestBed.inject(ChangeDetectorRef);
        const directive = new NbPlaceholderDirective(changeDR, unsubscribeService, service);
        expect(directive).toBeTruthy();
      });

      describe('verify the UI', () => {
        it('when the placeholder is string value', () => {
          const fixture = TestBed.createComponent(MockComponent);
          const component = fixture.componentInstance;

          component.placeholder = STR_PLACEHOLDER;
          fixture.detectChanges();
          const hostEle: HTMLElement = fixture.debugElement.nativeElement;
          const inputEle: HTMLInputElement | null = hostEle.querySelector('input');
          const inputPlaceholder = inputEle?.placeholder;
          expect(inputPlaceholder).toEqual(STR_PLACEHOLDER);
        });

        it('when the placeholder is an Observable value', fakeAsync(() => {
          const fixture = TestBed.createComponent(MockComponent);
          const component = fixture.componentInstance;

          const placeholder$ = new BehaviorSubject(OBSERVABLE_PLACEHOLDER);
          component.placeholder = placeholder$;
          fixture.detectChanges();
          const hostEle: HTMLElement = fixture.debugElement.nativeElement;
          expect(getInputPlaceholder(fixture, hostEle)).toEqual(OBSERVABLE_PLACEHOLDER);

          const newPlaceholderContent = `new one: ${OBSERVABLE_PLACEHOLDER}`;
          placeholder$.next(newPlaceholderContent);
          expect(getInputPlaceholder(fixture, hostEle)).toEqual(newPlaceholderContent);
        }));

        it('the placeholder is an Observable value, then change it as a new observable value', fakeAsync(() => {
          const fixture = TestBed.createComponent(MockComponent);
          const component = fixture.componentInstance;

          const firstObservable = new BehaviorSubject('');
          component.placeholder = firstObservable;
          fixture.detectChanges();

          // update placeholder content via observable
          firstObservable.next(OBSERVABLE_PLACEHOLDER);
          const hostEle: HTMLElement = fixture.debugElement.nativeElement;
          expect(getInputPlaceholder(fixture, hostEle)).toEqual(OBSERVABLE_PLACEHOLDER);

          // update as another observable value
          const newPlaceholderContent = `new ${OBSERVABLE_PLACEHOLDER}`;
          component.placeholder = new BehaviorSubject(newPlaceholderContent);
          // try to update placeholder content via first observable
          firstObservable.next(`old:${OBSERVABLE_PLACEHOLDER}`)
          fixture.detectChanges();

          // the placeholder content should be new one
          expect(getInputPlaceholder(fixture, hostEle)).toEqual(newPlaceholderContent);
        }));

      });

    });
  })

  describe('used in standalone component', () => {
    [
      {
        title: 'imported by standalone component',
        createComp: () => TestBed.createComponent(StandaloneComponent)
      },
      {
        title: 'imported by ngModule',
        createComp: () => TestBed.createComponent(StandaloneComponentWithNgModule)
      }
    ].forEach(item => {
      it(item.title, () => {
        const fixture = item.createComp();
        const component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.directiveInstance).toBeTruthy();
      });
    })
  });

});

const getInputPlaceholder = (
  fixture: ComponentFixture<MockComponent>,
  hostEle: HTMLElement
): string | undefined => {
  tick(10);
  fixture.detectChanges();
  const inputEle: HTMLInputElement | null = hostEle.querySelector('input');
  return inputEle?.placeholder;
}

const StandaloneCompConfig = {
  standalone: true,
  template: `<input [nbPlaceholder]="placeholderStr">`,
  imports: [NbPlaceholderDirective],
};

@Component(StandaloneCompConfig)
class StandaloneComponent {
  @ViewChild(NbPlaceholderDirective) directiveInstance!: NbPlaceholderDirective;
  placeholderStr = 'placeholder';
}

@Component({
  ...StandaloneCompConfig,
  imports: [NbCommonTestingModule],
})
class StandaloneComponentWithNgModule extends StandaloneComponent {
}