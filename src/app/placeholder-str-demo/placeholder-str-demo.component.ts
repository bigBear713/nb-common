import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GTagService } from '../g-tag.service';

@Component({
  selector: 'app-placeholder-str-demo',
  templateUrl: './placeholder-str-demo.component.html',
  styleUrls: ['./placeholder-str-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderStrDemoComponent implements OnInit {
  placeholder$ = new BehaviorSubject('这是placeholder');

  constructor(private gtagService: GTagService) {
    this.gtagService.trackPage({
      page_name: 'placeholderStr Director',
    });
  }

  ngOnInit() {}

  changeObservableContent(): void {
    const content =
      this.placeholder$.value === '这是placeholder' ? 'This is placeholder' : '这是placeholder';
    this.placeholder$.next(content);
    this.gtagService.trackButton({
      button_name: '更改观察者对象的内容',
      page_name: 'placeholderStr Director',
    });
  }
}
