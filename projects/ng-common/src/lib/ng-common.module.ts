import { NgModule } from '@angular/core';
import { TplContentPipe } from './pipes/tpl-content/tpl-content.pipe';

const PIPES = [
  TplContentPipe,
];

@NgModule({
  declarations: [...PIPES],
  imports: [
  ],
  exports: [...PIPES]
})
export class NgCommonModule { }
