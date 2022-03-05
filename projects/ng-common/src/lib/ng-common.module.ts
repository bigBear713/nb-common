import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RStrComponent } from './components/r-str/r-str.component';
import { IsAsyncPipe } from './pipes/is-async.pipe';
import { TplContentPipe } from './pipes/tpl-content.pipe';

const COMPONENTS = [
  RStrComponent,
];

const PIPES = [
  TplContentPipe,
  IsAsyncPipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule],
  exports: [...COMPONENTS, ...PIPES]
})
export class NgCommonModule { }
