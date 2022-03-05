import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-placeholder-str-demo',
  templateUrl: './placeholder-str-demo.component.html',
  styleUrls: ['./placeholder-str-demo.component.scss']
})
export class PlaceholderStrDemoComponent implements OnInit {

  placeholder$ = new BehaviorSubject('这是placeholder');

  constructor() { }

  ngOnInit() {
  }

  changeObservableContent(): void {
    const content = this.placeholder$.value === '这是placeholder' ? 'This is placeholder' : '这是placeholder';
    this.placeholder$.next(content);
  }

}
