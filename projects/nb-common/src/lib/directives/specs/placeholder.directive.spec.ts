import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { NbPlaceholderDirective } from '../placeholder.directive';

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
    });
  });

  beforeEach(() => {
    const service = TestBed.inject(NbValueTypeService);
    directive = new NbPlaceholderDirective(service);
  });

  it('create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('verify the UI', () => {
    it('when the placeholder is string value', () => {
      const fixture = TestBed.createComponent(MockComponent);
      const component = fixture.componentInstance;
      const mockPlaceholder = 'this is placeholder';
      component.placeholder = mockPlaceholder;
      fixture.detectChanges();

      const hostEle: HTMLElement = fixture.debugElement.nativeElement;
      const inputEle: HTMLInputElement | null = hostEle.querySelector('input');
      const inputPlaceholder = inputEle?.placeholder;
      expect(inputPlaceholder).toEqual(mockPlaceholder);
    });

    it('when the placeholder is Observable value', fakeAsync(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const component = fixture.componentInstance;
      const mockPlaceholder = new BehaviorSubject('this is placeholder');
      component.placeholder = mockPlaceholder;
      fixture.detectChanges();

      const hostEle: HTMLElement = fixture.debugElement.nativeElement;
      const getInputPlaceholder = () => {
        tick(10);
        fixture.detectChanges();
        const inputEle: HTMLInputElement | null = hostEle.querySelector('input');
        return inputEle?.placeholder;
      }

      expect(getInputPlaceholder()).toEqual('this is placeholder');

      mockPlaceholder.next('这是placeholder');
      expect(getInputPlaceholder()).toEqual('这是placeholder');
    }));
  });

});
