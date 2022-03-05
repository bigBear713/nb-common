import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ValueTypeService } from '../../services/value-type.service';
import { NgCommonTestingModule } from '../../testing/ng-common-testing.module';
import { PlaceholderStrDirective } from '../placeholder-str.directive';

@Component({
  selector: 'mock-component',
  template: `<input [placeholderStr]="placeholder">`
})
class MockComponent {
  placeholder: string | Observable<string> = '';
}

describe('Directive: PlaceholderStr', () => {
  let directive: PlaceholderStrDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCommonTestingModule],
      declarations: [MockComponent],
    });
  });

  beforeEach(() => {
    const service = TestBed.inject(ValueTypeService);
    directive = new PlaceholderStrDirective(service);
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
