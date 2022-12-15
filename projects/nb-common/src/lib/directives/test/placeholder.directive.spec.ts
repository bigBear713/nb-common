import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
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
  let directive: NbPlaceholderDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbCommonTestingModule],
      declarations: [MockComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: jasmine.createSpyObj(ChangeDetectorRef, ['markForCheck']) }
      ]
    });
  });

  beforeEach(() => {
    const service = TestBed.inject(NbValueTypeService);
    const changeDR = TestBed.inject(ChangeDetectorRef);
    directive = new NbPlaceholderDirective(changeDR, service);
  });

  it('create an instance', () => {
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

      const mockPlaceholder = new BehaviorSubject(OBSERVABLE_PLACEHOLDER);
      component.placeholder = mockPlaceholder;
      fixture.detectChanges();
      const hostEle: HTMLElement = fixture.debugElement.nativeElement;
      expect(getInputPlaceholder(fixture, hostEle)).toEqual(OBSERVABLE_PLACEHOLDER);

      mockPlaceholder.next('这是placeholder');
      expect(getInputPlaceholder(fixture, hostEle)).toEqual('这是placeholder');
    }));

    it('the placeholder is an Observable value, then change it as a string value', fakeAsync(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const component = fixture.componentInstance;

      const mockPlaceholder = new BehaviorSubject(OBSERVABLE_PLACEHOLDER);
      component.placeholder = mockPlaceholder;
      fixture.detectChanges();
      const hostEle: HTMLElement = fixture.debugElement.nativeElement;
      expect(getInputPlaceholder(fixture, hostEle)).toEqual(OBSERVABLE_PLACEHOLDER);

      component.placeholder = STR_PLACEHOLDER;
      fixture.detectChanges();

      expect(mockPlaceholder.observers.length).toBeFalsy();
      expect(getInputPlaceholder(fixture, hostEle)).toEqual(STR_PLACEHOLDER);
    }));

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