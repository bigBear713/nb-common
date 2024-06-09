import { TestBed } from '@angular/core/testing';
import { NbValueTypeService } from '../../services/value-type.service';
import { NbTplContentPipe } from '../tpl-content.pipe';
import { getTplRefInstance } from '../../testing/templateRef/templateRef-testing.module';
import { Component, TemplateRef, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';

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
    tplRef = getTplRefInstance(TestBed).tplRef;
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
  describe('used in standalone component', () => {
    [
      {
        title: 'imported by standalone component',
        createComp: () => TestBed.createComponent(StandaloneComponent)
      },
      {
        title: 'imported by ngModule',
        createComp: () => TestBed.createComponent(StandaloneComponentWithNgModule)
      }
    ].forEach(item => {
      it(item.title, () => {
        const fixture = item.createComp();
        const component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.elementRef.nativeElement.textContent?.trim()).toEqual('true - false');
      });
    })
  });

});

const StandaloneCompConfig = {
  standalone: true,
  template: `{{!!(tplValue|nbTplContent)}} - {{!!(strValue|nbTplContent)}}`,
  imports: [NbTplContentPipe],
};

@Component(StandaloneCompConfig)
class StandaloneComponent {
  tplValue = getTplRefInstance(TestBed).tplRef;
  strValue = 'string';
  constructor(public elementRef: ElementRef<HTMLDivElement>) { }
}

@Component({
  ...StandaloneCompConfig,
  imports: [NbCommonTestingModule],
})
class StandaloneComponentWithNgModule extends StandaloneComponent { }
