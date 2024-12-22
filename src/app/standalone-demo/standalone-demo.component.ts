import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NbImgDirective,
  NbPlaceholderDirective,
  NbRStrComponent,
  NbTplContentPipe,
  NB_DEFAULT_LOADING_IMG,
} from 'nb-common';
import { BehaviorSubject } from 'rxjs';
import { GTagService } from '../g-tag.service';

@Component({
    selector: 'app-standalone-demo',
    templateUrl: './standalone-demo.component.html',
    styleUrls: ['./standalone-demo.component.css'],
    imports: [
        CommonModule,
        NbRStrComponent,
        NbPlaceholderDirective,
        NbImgDirective,
        NbTplContentPipe,
    ],
    providers: [
        {
            provide: NB_DEFAULT_LOADING_IMG,
            useFactory: (domSanitizer: DomSanitizer) => {
                return domSanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDp0cmFuc3BhcmVudDtkaXNwbGF5OmJsb2NrOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8cGF0aCBkPSJNMTcgNTBBMzMgMzMgMCAwIDAgODMgNTBBMzMgMzUgMCAwIDEgMTcgNTAiIGZpbGw9IiM0MGE5ZmYiIHN0cm9rZT0ibm9uZSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDsxIiB2YWx1ZXM9IjAgNTAgNTE7MzYwIDUwIDUxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvcGF0aD4KPC9zdmc+');
            },
            deps: [DomSanitizer],
        },
    ]
})
export class StandaloneDemoComponent implements OnInit, OnDestroy {
  promiseDemo = new Promise<string>(resolve =>
    setTimeout(() => resolve('this is an async string value '), 1000)
  );

  bigImg = 'https://pic2.zhimg.com/v2-77be54b348b0168f3562f51404451aeb_r.jpg';

  placeholder$ = new BehaviorSubject('这是placeholder');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intervalId!: any;

  constructor(private gtagService: GTagService) {
    this.gtagService.trackPage({
      page_name: 'standalone component',
    });
  }

  ngOnInit() {
    this.intervalUpdatePlaceholderStr();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private intervalUpdatePlaceholderStr(): void {
    this.intervalId = setInterval(() => {
      const str =
        this.placeholder$.value === '这是placeholder' ? 'This is placeholder' : '这是placeholder';
      this.placeholder$.next(str);
    }, 3000);
  }
}
