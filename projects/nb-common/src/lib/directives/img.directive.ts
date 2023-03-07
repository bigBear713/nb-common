import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Optional,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NB_DEFAULT_ERR_IMG, NB_DEFAULT_LOADING_IMG } from '../constants';

const DEFAULT_LOADING_IMG = './assets/nb-common/loading.svg';
const DEFAULT_ERR_IMG = './assets/nb-common/picture.svg';

@Directive({ standalone: true, selector: 'img[nbImg]' })
export class NbImgDirective implements OnChanges {
  @Input() errImg: string | SafeResourceUrl;

  @Input() loadingImg: string | SafeResourceUrl;

  @Input() nbImg: string = '';

  @HostBinding('src') src: string | SafeResourceUrl = '';

  constructor(
    private changeDR: ChangeDetectorRef,
    @Inject(NB_DEFAULT_ERR_IMG) @Optional()
    private defaultErrImg: string | SafeResourceUrl,
    @Inject(NB_DEFAULT_LOADING_IMG) @Optional()
    private defaultLoadingImg: string | SafeResourceUrl,
    private elementRef: ElementRef<HTMLImageElement>
  ) {
    this.loadingImg = this.defaultLoadingImg || DEFAULT_LOADING_IMG;
    this.errImg = this.defaultErrImg || DEFAULT_ERR_IMG;
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
      this.updateImgSrc(this.errImg)
      this.elementRef.nativeElement.onerror = null;
    }
  }

  private updateImgSrc(src: string | SafeResourceUrl): void {
    this.src = src;
    this.changeDR.markForCheck();
  }

}
