import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NbIsAsyncPipe } from '../../pipes/is-async.pipe';

type AsyncType = Observable<string> | Promise<string>;

@Component({
  standalone: true,
  imports:[CommonModule, NbIsAsyncPipe],
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
