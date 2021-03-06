import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbRStrComponent } from './components/r-str/r-str.component';
import { NbImgDirective } from './directives/img.directive';
import { NbPlaceholderDirective } from './directives/placeholder.directive';
import { NbIsAsyncPipe } from './pipes/is-async.pipe';
import { NbIsBooleanPipe } from './pipes/is-boolean.pipe';
import { NbIsNumberPipe } from './pipes/is-number.pipe';
import { NbIsObservablePipe } from './pipes/is-observable.pipe';
import { NbIsStringPipe } from './pipes/is-string.pipe';
import { NbTplContentPipe } from './pipes/tpl-content.pipe';

const COMPONENTS = [
  NbRStrComponent,
];

const DIRECTIVES = [
  NbPlaceholderDirective,
  NbImgDirective,
];

const PIPES = [
  NbTplContentPipe,
  NbIsBooleanPipe,
  NbIsNumberPipe,
  NbIsAsyncPipe,
  NbIsObservablePipe,
  NbIsStringPipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES]
})
export class NbCommonModule { }
