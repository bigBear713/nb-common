import { TestBed } from '@angular/core/testing';
import { NgCommonTestingModule } from '../../testing/ng-common-testing.module';
import { ValueTypeService } from '../../services/value-type.service';
import { IsAsyncPipe } from '../is-async.pipe';
import { Observable, Subject } from 'rxjs';

describe('Pipe: IsAsynce', () => {
  let pipe: IsAsyncPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgCommonTestingModule]
    });
  });

  beforeEach(() => {
    const valueTypeService = TestBed.inject(ValueTypeService);
    pipe = new IsAsyncPipe(valueTypeService);
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
      { title: 'the value is object type', getValue: () => { }, expect: false },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), expect: true },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), expect: true },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), expect: true },
    ].forEach(item => {
      it(item.title, () => {
        const result = pipe.transform(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });

});
