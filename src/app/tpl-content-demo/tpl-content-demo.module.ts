import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TplContentDemoComponent } from './tpl-content-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCommonModule } from 'nb-common';

const routes: Routes = [
  {
    path: '',
    component: TplContentDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NbCommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TplContentDemoComponent]
})
export class TplContentDemoModule { }
