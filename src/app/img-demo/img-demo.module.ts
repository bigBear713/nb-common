import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDemoComponent } from './img-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCommonModule, NB_DEFAULT_ERR_IMG, NB_DEFAULT_LOADING_IMG } from 'nb-common';
import { DomSanitizer } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: ImgDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NbCommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImgDemoComponent],
  providers: [
    // {
    //   provide: NB_DEFAULT_ERR_IMG,
    //   useValue: '/assets/picture.svg'
    // },
    // {
    //   provide: NB_DEFAULT_LOADING_IMG,
    //   useValue: '/assets/loading.svg'
    // }
    // {
    //   provide: NB_DEFAULT_LOADING_IMG,
    //   useFactory: (domSanitizer: DomSanitizer) => {
    //     return domSanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDp0cmFuc3BhcmVudDtkaXNwbGF5OmJsb2NrOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8cGF0aCBkPSJNMTcgNTBBMzMgMzMgMCAwIDAgODMgNTBBMzMgMzUgMCAwIDEgMTcgNTAiIGZpbGw9IiM0MGE5ZmYiIHN0cm9rZT0ibm9uZSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDsxIiB2YWx1ZXM9IjAgNTAgNTE7MzYwIDUwIDUxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvcGF0aD4KPC9zdmc+')
    //   },
    //   deps: [DomSanitizer]
    // }
  ]
})
export class ImgDemoModule { }
