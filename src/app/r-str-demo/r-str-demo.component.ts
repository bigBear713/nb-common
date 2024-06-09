import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GTagService } from '../g-tag.service';

@Component({
  selector: 'app-r-str-demo',
  templateUrl: './r-str-demo.component.html',
  styleUrls: ['./r-str-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RStrDemoComponent implements OnInit {
  observableDemo$ = new BehaviorSubject<string>('1');
  promiseDemo = Promise.resolve('1');

  constructor(private gtagService: GTagService) {
    this.gtagService.trackPage({
      page_name: 'r-str component',
    });
  }

  ngOnInit() {}

  changeObservableContent(): void {
    const content = Number(this.observableDemo$.value) + 1;
    this.observableDemo$.next(content.toString());
    this.gtagService.trackButton({
      button_name: '更改观察者对象的内容',
      page_name: 'r-str component',
    });
  }
}
