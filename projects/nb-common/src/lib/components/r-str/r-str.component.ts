import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

type AsyncType = Observable<string> | Promise<string>;

@Component({
  selector: '[nb-r-str]',
  template: `
    <ng-container [ngSwitch]="content | nbIsAsync">
      <ng-container *ngSwitchCase="true">{{asyncContent | async}}</ng-container>
      <ng-container *ngSwitchDefault>{{content}}</ng-container>
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
