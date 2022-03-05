import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RStrComponent } from './components/r-str/r-str.component';
import { PlaceholderStrDirective } from './directives/placeholder-str.directive';
import { IsAsyncPipe } from './pipes/is-async.pipe';
import { TplContentPipe } from './pipes/tpl-content.pipe';

const COMPONENTS = [
  RStrComponent,
];

const DIRECTIVES = [
  PlaceholderStrDirective,
];

const PIPES = [
  TplContentPipe,
  IsAsyncPipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES]
})
export class NgCommonModule { }
