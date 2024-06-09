import { TestBed } from '@angular/core/testing';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbIsAsyncPipe } from '../is-async.pipe';
import { Observable, Subject } from 'rxjs';
import { Component, ElementRef } from '@angular/core';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';

describe('Pipe: NbIsAsync', () => {
  let pipe: NbIsAsyncPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbValueTypeService],
    });
  });

  beforeEach(() => {
    const valueTypeService = TestBed.inject(NbValueTypeService);
    pipe = new NbIsAsyncPipe(valueTypeService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => {}, expect: false },
      {
        title: 'the value is Observable type',
        getValue: () => new Observable<string>(),
        expect: true,
      },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: true },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: true },
    ].forEach(item => {
      it(item.title, () => {
        const result = pipe.transform(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('used in standalone component', () => {
    [
      {
        title: 'imported by standalone component',
        createComp: () => TestBed.createComponent(StandaloneComponent),
      },
      {
        title: 'imported by ngModule',
        createComp: () => TestBed.createComponent(StandaloneComponentWithNgModule),
      },
    ].forEach(item => {
      it(item.title, () => {
        const fixture = item.createComp();
        const component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.elementRef.nativeElement.textContent?.trim()).toEqual('true - false');
      });
    });
  });
});

const StandaloneCompConfig = {
  standalone: true,
  template: `{{asyncValue|nbIsAsync}} - {{strValue|nbIsAsync}}`,
  imports: [NbIsAsyncPipe],
};

@Component(StandaloneCompConfig)
class StandaloneComponent {
  asyncValue = Promise.resolve('string');
  strValue = 'string';
  constructor(public elementRef: ElementRef<HTMLDivElement>) {}
}

@Component({
  ...StandaloneCompConfig,
  imports: [NbCommonTestingModule],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class StandaloneComponentWithNgModule extends StandaloneComponent {}
