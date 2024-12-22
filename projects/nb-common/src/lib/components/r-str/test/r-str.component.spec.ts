import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbCommonTestingModule } from '../../../testing/nb-common-testing.module';
import { NbRStrComponent } from '../r-str.component';

@Component({
  standalone: false,
  selector: 'nb-r-str-host',
  template: `<span [nb-r-str]="content"></span>`,
})
class RStrHostComponent {
  content: string | Observable<string> | Promise<string> = '';
}

describe('NbRStrComponent', () => {
  [
    {
      title: 'imported by ngModule',
      imports: [NbCommonTestingModule],
    },
    {
      title: 'imported by standalone component',
      imports: [NbRStrComponent],
    },
  ].forEach(item => {
    describe(item.title, () => {
      let component: NbRStrComponent;
      let fixture: ComponentFixture<NbRStrComponent>;
      let rStrHostComp: RStrHostComponent;
      let rStrFixture: ComponentFixture<RStrHostComponent>;
      let rStrHostEle: HTMLElement;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [...item.imports],
          declarations: [RStrHostComponent],
        });
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(NbRStrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        rStrFixture = TestBed.createComponent(RStrHostComponent);
        rStrHostComp = rStrFixture.componentInstance;
        rStrHostEle = rStrFixture.debugElement.nativeElement;
      });

      it('create an instance', () => {
        expect(component).toBeTruthy();
      });

      describe('verify the UI', () => {
        it('when the content is string type', () => {
          const mockContent = 'string content';
          rStrHostComp.content = mockContent;
          rStrFixture.detectChanges();
          const contentFromUI = rStrHostEle.querySelector('span')?.textContent?.trim();
          expect(contentFromUI).toEqual(mockContent);
        });

        it('when the content is Observable type', fakeAsync(() => {
          const mockContent = new BehaviorSubject('1');
          rStrHostComp.content = mockContent;
          rStrFixture.detectChanges();

          const getContent = () => {
            tick(10);
            rStrFixture.detectChanges();
            return rStrHostEle.querySelector('span')?.textContent?.trim();
          };

          expect(getContent()).toEqual('1');

          mockContent.next('2');
          expect(getContent()).toEqual('2');
        }));
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

        expect(component.compInstance).toBeTruthy();
      });
    });
  });
});

const StandaloneCompConfig = {
  standalone: true,
  template: `<span [nb-r-str]="content"></span>`,
  imports: [NbRStrComponent],
};

@Component(StandaloneCompConfig)
class StandaloneComponent {
  @ViewChild(NbRStrComponent) compInstance!: NbRStrComponent;
  content = 'str content';
}

@Component({
  ...StandaloneCompConfig,
  imports: [NbCommonTestingModule],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class StandaloneComponentWithNgModule extends StandaloneComponent {}
