import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NB_DEFAULT_ERR_IMG, NB_DEFAULT_LOADING_IMG } from '../constants';

const DEFAULT_LOADING_IMG = './assets/nb-common/loading.svg';
const DEFAULT_ERR_IMG = './assets/nb-common/picture.svg';

@Directive({ standalone: true, selector: 'img[nbImg]' })
export class NbImgDirective implements OnChanges {
  private changeDR: ChangeDetectorRef = inject(ChangeDetectorRef);

  private defaultErrImg: string | SafeResourceUrl | null = inject(NB_DEFAULT_ERR_IMG, {
    optional: true,
  });

  private defaultLoadingImg: string | SafeResourceUrl | null = inject(NB_DEFAULT_LOADING_IMG, {
    optional: true,
  });

  private elementRef: ElementRef<HTMLImageElement> = inject(ElementRef);

  @Input() errImg: string | SafeResourceUrl;

  @Input() loadingImg: string | SafeResourceUrl;

  @Input() nbImg: string = '';

  @HostBinding('src') src: string | SafeResourceUrl = '';

  constructor() {
    this.loadingImg = this.defaultLoadingImg ? this.defaultLoadingImg : DEFAULT_LOADING_IMG;
    this.errImg = this.defaultErrImg ? this.defaultErrImg : DEFAULT_ERR_IMG;
  }

  ngOnChanges(changes: SimpleChanges) {
    const { nbImg } = changes;
    this.changeNbImg(nbImg);
  }

  private changeNbImg(nbImg: SimpleChange): void {
    if (nbImg?.firstChange) {
      this.src = this.elementRef.nativeElement.src;
    }
    if (nbImg) {
      this.loadImage();
    }
  }

  private loadImage(): void {
    if (!this.nbImg) {
      this.loadImgFromSrc();
      return;
    }

    this.loadImgFromNbImg();
  }

  private loadImgFromNbImg(): void {
    this.updateImgSrc(this.loadingImg);

    const image = new Image();
    image.onerror = () => this.updateImgSrc(this.errImg);
    image.onload = () => this.updateImgSrc(this.nbImg);
    // set src value after setting the onload/onerror function to avoid the problem that
    // the img has been loaded, but the onload/onerror function has not been mounted yet
    image.src = this.nbImg;
  }

  private loadImgFromSrc(): void {
    this.elementRef.nativeElement.onerror = () => {
      this.updateImgSrc(this.errImg);
      this.elementRef.nativeElement.onerror = null;
    };
  }

  private updateImgSrc(src: string | SafeResourceUrl): void {
    this.src = src;
    this.changeDR.markForCheck();
  }
}
