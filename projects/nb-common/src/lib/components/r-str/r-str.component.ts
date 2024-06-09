import { AsyncPipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NbIsAsyncPipe } from '../../pipes/is-async.pipe';

type AsyncType = Observable<string> | Promise<string>;

const importsFromNgCommon = [NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe];
const importsFromSelf = [NbIsAsyncPipe];

@Component({
  standalone: true,
  imports: [...importsFromNgCommon, ...importsFromSelf],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nb-r-str]',
  template: `
    <ng-container [ngSwitch]="content | nbIsAsync">
      <ng-container *ngSwitchCase="true">{{ asyncContent | async }}</ng-container>
      <ng-container *ngSwitchDefault>{{ content }}</ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRStrComponent {
  @Input('nb-r-str') content: string | Observable<string> | Promise<string> = '';

  get asyncContent(): AsyncType {
    return this.content as AsyncType;
  }
}
