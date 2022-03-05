import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderStrDemoComponent } from './placeholder-str-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgCommonModule } from 'ng-common';

const routes: Routes = [
  {
    path: '',
    component: PlaceholderStrDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceholderStrDemoComponent]
})
export class PlaceholderStrDemoModule { }
