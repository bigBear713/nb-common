import { TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { NbIsBooleanPipe } from '../is-boolean.pipe';

describe('Pipe: NbIsBoolean', () => {
  let pipe: NbIsBooleanPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NbCommonTestingModule]
    });
  });

  beforeEach(() => {
    const valueTypeService = TestBed.inject(NbValueTypeService);
    pipe = new NbIsBooleanPipe(valueTypeService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform()', () => {
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
    ].forEach(item => {
      it(item.title, () => {
        const result = pipe.transform(item.getValue());
        expect(result).toEqual(item.expect);
      });
    });
  });
});
