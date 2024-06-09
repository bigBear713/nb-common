import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RStrDemoComponent } from './r-str-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCommonModule } from 'nb-common';

const routes: Routes = [
  {
    path: '',
    component: RStrDemoComponent,
  },
];

@NgModule({
  imports: [CommonModule, NbCommonModule, RouterModule.forChild(routes)],
  declarations: [RStrDemoComponent],
})
export class RStrDemoModule {}
