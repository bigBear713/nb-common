import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NbIsAsyncPipe } from '../../pipes/is-async.pipe';

type AsyncType = Observable<string> | Promise<string>;

const importsFromNgCommon = [AsyncPipe];
const importsFromSelf = [NbIsAsyncPipe];

@Component({
  standalone: true,
  imports: [...importsFromNgCommon, ...importsFromSelf],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nb-r-str]',
  template: `
    @switch (content | nbIsAsync) {
      @case (true) {
        {{ asyncContent | async }}
      }
      @default {
        {{ content }}
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRStrComponent {
  @Input('nb-r-str') content: string | Observable<string> | Promise<string> = '';

  get asyncContent(): AsyncType {
    return this.content as AsyncType;
  }
}
