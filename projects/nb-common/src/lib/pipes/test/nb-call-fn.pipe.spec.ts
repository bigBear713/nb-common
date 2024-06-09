/* eslint-disable @typescript-eslint/no-explicit-any */
/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { NbCallFnPipe } from '../nb-call-fn.pipe';
import { NbValueTypeService } from 'nb-common';

describe('Pipe: CallFn ', () => {
  let pipe: NbCallFnPipe;
  let valueTypeService: NbValueTypeService;

  beforeEach(() => {
    pipe = new NbCallFnPipe();
    TestBed.configureTestingModule({
      providers: [NbValueTypeService],
    });
    valueTypeService = TestBed.inject(NbValueTypeService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('when fn is undefined', () => {
    expect(pipe.transform(undefined as any)).toBeUndefined();
  });

  it('verify the fu result type', () => {
    const fn1 = () => 123;
    const result1 = pipe.transform(fn1);
    expect(valueTypeService.isNumber(result1)).toBeTrue();

    const fn2 = () => 'str';
    const result2 = pipe.transform(fn2);
    expect(valueTypeService.isString(result2)).toBeTrue();
  });

  describe('when there are some params', () => {
    [
      { title: 'empty param', params: [] },
      { title: '1 param', params: [1] },
      { title: '2 param', params: [1, '2'] },
    ].forEach(item => {
      it(item.title, () => {
        const testObj = {
          fn: function () {},
        };
        const spyFn = spyOn(testObj, 'fn').and.callThrough();
        pipe.transform(testObj.fn, ...item.params);
        expect(spyFn).toHaveBeenCalledWith(...(item.params as []));
      });
    });
  });
});
