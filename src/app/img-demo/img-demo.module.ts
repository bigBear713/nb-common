import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDemoComponent } from './img-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCommonModule, NB_DEFAULT_ERR_IMG, NB_DEFAULT_LOADING_IMG } from 'nb-common';

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
  ]
})
export class ImgDemoModule { }
