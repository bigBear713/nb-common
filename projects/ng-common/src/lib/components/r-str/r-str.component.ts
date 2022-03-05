import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

type AsyncType = Observable<string> | Promise<string>;

@Component({
  selector: '[r-str]',
  template: `
    <ng-container [ngSwitch]="content | isAsync">
      <ng-container *ngSwitchCase="true">{{asyncContent | async}}</ng-container>
      <ng-container *ngSwitchDefault>{{content}}</ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RStrComponent {
  @Input('r-str') content: string | Observable<string> | Promise<string> = '';

  get asyncContent(): AsyncType {
    return this.content as AsyncType;
  }
}
