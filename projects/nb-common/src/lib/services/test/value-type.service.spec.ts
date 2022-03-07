import { TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { getTplRefInstance } from '../../testing/templateRef/templateRef-testing.module';
import { NbValueTypeService } from '../value-type.service';

describe('Service: NbValueType', () => {
  let service: NbValueTypeService;
  let tplRef: TemplateRef<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NbCommonTestingModule]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(NbValueTypeService);
    tplRef = getTplRefInstance(TestBed).tplRef;
  });

  it('create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('#isBoolean()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is number type', getValue: () => new Number(123), expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: true },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: true },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: false },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: false },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: false },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: false },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isBoolean(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('#isNumber()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: true },
      { title: 'the value is number type', getValue: () => NaN, expect: true },
      { title: 'the value is number type', getValue: () => new Number(123), expect: true },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: false },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: false },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: false },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: false },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isNumber(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('#isObservable()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is number type', getValue: () => new Number(123), expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: true },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: true },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: false },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: false },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isObservable(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('#isPromise()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is number type', getValue: () => new Number(123), expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: false },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: false },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: true },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: false },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isPromise(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('#isString()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: true },
      { title: 'the value is string type', getValue: () => new String('string'), expect: true },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is number type', getValue: () => new Number(123), expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: false },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: false },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: false },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: false },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isString(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

  describe('#isTemplateRef()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', expect: false },
      { title: 'the value is string type', getValue: () => new String('string'), expect: false },
      { title: 'the value is number type', getValue: () => 123, expect: false },
      { title: 'the value is number type', getValue: () => new Number(123), expect: false },
      { title: 'the value is boolean type', getValue: () => true, expect: false },
      { title: 'the value is boolean type', getValue: () => new Boolean(false), expect: false },
      { title: 'the value is null type', getValue: () => null, expect: false },
      { title: 'the value is undefined type', getValue: () => undefined, expect: false },
      { title: 'the value is array type', getValue: () => [], expect: false },
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: false },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: false },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: false },
      { title: 'the value is templateRef type', getValue: () => tplRef, expect: true },
    ].forEach(item => {
      it(item.title, () => {
        const result = service.isTemplateRef(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

});
