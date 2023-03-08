import { TestBed } from '@angular/core/testing';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbTplContentPipe } from '../tpl-content.pipe';
import { getTplRefInstance } from '../../testing/templateRef/templateRef-testing.module';
import { TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

describe('Pipe:  NbTplContente', () => {
  let pipe: NbTplContentPipe;
  let tplRef: TemplateRef<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NbValueTypeService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    const valueTypeService = TestBed.inject(NbValueTypeService);
    pipe = new NbTplContentPipe(valueTypeService);
    tplRef = tplRef = getTplRefInstance(TestBed).tplRef;;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform()', () => {
    [
      { title: 'the value is string type', getValue: () => 'string', getExpect: () => null },
      { title: 'the value is string type', getValue: () => new String('string'), getExpect: () => null },
      { title: 'the value is number type', getValue: () => 123, getExpect: () => null },
      { title: 'the value is boolean type', getValue: () => true, getExpect: () => null },
      { title: 'the value is null type', getValue: () => null, getExpect: () => null },
      { title: 'the value is undefined type', getValue: () => undefined, getExpect: () => null },
      { title: 'the value is array type', getValue: () => [], getExpect: () => null },
      { title: 'the value is object type', getValue: () => { }, getExpect: () => null },
      { title: 'the value is Observable type', getValue: () => new Observable<string>(), getExpect: () => null },
      { title: 'the value is Subject type', getValue: () => new Subject<string>(), getExpect: () => null },
      { title: 'the value is Promise type', getValue: () => Promise.resolve(), getExpect: () => null },
      { title: 'the value is templateRef type', getValue: () => tplRef, getExpect: () => tplRef },
    ].forEach(item => {
      it(item.title, () => {
        const result = pipe.transform(item.getValue());
        expect(result).toEqual(item.getExpect());
      });
    });
  });

});
