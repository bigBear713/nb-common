import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TplContentDemoComponent } from './tpl-content-demo.component';
import { Route, RouterModule } from '@angular/router';
import { NgCommonModule } from 'ng-common';

const routes: Route[] = [
  {
    path: '',
    component: TplContentDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgCommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TplContentDemoComponent]
})
export class TplContentDemoModule { }
