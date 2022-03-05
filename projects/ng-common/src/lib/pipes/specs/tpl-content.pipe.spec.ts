import { TestBed } from '@angular/core/testing';
import { NgCommonTestingModule } from '../../testing/ng-common-testing.module';
import { ValueTypeService } from '../../services/value-type.service';
import { TplContentPipe } from '../tpl-content.pipe';
import { TemplateRefTestingComponent, TemplateRefTestingModule } from '../../testing/templateRef/templateRef-testing.module';
import { TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';


describe('Pipe:  TplContente', () => {
  let pipe: TplContentPipe;
  let tplRef: TemplateRef<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCommonTestingModule, TemplateRefTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    const valueTypeService = TestBed.inject(ValueTypeService);
    pipe = new TplContentPipe(valueTypeService);
    const tplFixture = TestBed.createComponent(TemplateRefTestingComponent);
    const tplComp = tplFixture.componentInstance;
    tplFixture.detectChanges();
    tplRef = tplComp.tplRef;
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
