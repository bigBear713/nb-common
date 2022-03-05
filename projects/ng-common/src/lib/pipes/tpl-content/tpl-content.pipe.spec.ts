import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TplContentPipe } from './tpl-content.pipe';

@Component({
  selector: 'mock-tpl-ref',
  template: `<ng-template #tplRef></ng-template>`,
})
export class MockTplRefComponent {
  @ViewChild('tplRef') tplRef!: TemplateRef<any>;
}

describe('Pipe:  TplContente', () => {
  let pipe: TplContentPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [MockTplRefComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    pipe = new TplContentPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform()', () => {
    it(`the params is string type`, () => {
      const content = pipe.transform('str content');
      expect(content).toEqual(null);
    });

    it(`the params is boolean type`, () => {
      const content = pipe.transform(true);
      expect(content).toEqual(null);
    });

    it(`the params is number type`, () => {
      const content = pipe.transform(123);
      expect(content).toEqual(null);
    });

    it(`the params is undefined`, () => {
      const content = pipe.transform();
      expect(content).toEqual(null);
    });

    it(`the params is object type`, () => {
      const content = pipe.transform({});
      expect(content).toEqual(null);
    });

    it(`the params is templateRef type`, () => {
      const tplFixture = TestBed.createComponent(MockTplRefComponent);
      const tplComp = tplFixture.componentInstance;
      tplFixture.detectChanges();

      const content = pipe.transform(tplComp.tplRef);
      expect(content).toEqual(tplComp.tplRef);
    });
  });


});
