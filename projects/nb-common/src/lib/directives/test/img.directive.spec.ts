import { TestBed } from '@angular/core/testing';
import { NbCommonTestingModule } from '../../testing/nb-common-testing.module';
import { NbImgDirective } from '../img.directive';

describe('Directive: Img', () => {
  let imgDirective: NbImgDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbCommonTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    imgDirective = TestBed.inject(NbImgDirective);
  });

  it('should create an instance', () => {
    expect(imgDirective).toBeTruthy();
  });
});
