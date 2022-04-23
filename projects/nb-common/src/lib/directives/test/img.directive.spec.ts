import { ChangeDetectorRef, ElementRef, SimpleChange } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { NbImgDirective } from '../img.directive';

const fineImg = 'data:image/png;base64,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';

describe('Directive: Img', () => {
  let imgDirective: NbImgDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbCommonTestingModule],
      providers: [
        NbImgDirective,
        { provide: ChangeDetectorRef, useValue: jasmine.createSpyObj(ChangeDetectorRef, ['markForCheck']) },
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('img')
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    imgDirective = TestBed.inject(NbImgDirective);
  });

  it('should create an instance', () => {
    expect(imgDirective).toBeTruthy();
  });

  it('verify the src value', () => {
    const elementRef = TestBed.inject(ElementRef);
    const imgSrcSpy = spyOnProperty(elementRef.nativeElement, 'src').and.returnValue('img');

    const changes1 = {};
    imgDirective.ngOnChanges(changes1);
    expect(imgDirective.src).toEqual('');

    const changes2 = {
      nbImg: new SimpleChange(undefined, '', true)
    };
    imgDirective.nbImg = changes2.nbImg.currentValue;
    imgDirective.ngOnChanges(changes2);
    expect(imgDirective.src).toEqual('img');


    imgSrcSpy.and.returnValue('img2');
    const changes3 = {
      nbImg: new SimpleChange(undefined, '', false)
    };
    imgDirective.nbImg = changes3.nbImg.currentValue;
    imgDirective.ngOnChanges(changes3);
    expect(imgDirective.src).toEqual('img');

  });

  it('#loadImgFromSrc()', () => {
    imgDirective.errImg = 'errImg';
    const elementRef = TestBed.inject(ElementRef);
    const changeDR = TestBed.inject(ChangeDetectorRef);

    const changes = {
      nbImg: new SimpleChange(undefined, '', false)
    };
    imgDirective.nbImg = changes.nbImg.currentValue;
    imgDirective.ngOnChanges(changes);
    elementRef.nativeElement.onerror();

    expect(imgDirective.src).toEqual(imgDirective.errImg);
    expect(changeDR.markForCheck).toHaveBeenCalledTimes(1);
  });

  describe('load image via nbImg', () => {
    [
      {
        title: 'failure to load image',
        nbImg: 'nbImg',
        expect: '/assets/nb-common/picture.svg'
      },
      {
        title: 'success to load image',
        nbImg: fineImg,
        expect: fineImg
      }
    ].forEach(item => {
      it(item.title, async () => {
        const changes = {
          nbImg: new SimpleChange(undefined, item.nbImg, true)
        };
        imgDirective.nbImg = changes.nbImg.currentValue;
        imgDirective.ngOnChanges(changes);
        expect(imgDirective.src).toEqual('/assets/nb-common/loading.svg');
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(imgDirective.src).toEqual(item.expect);
      });
    })
  });

});
