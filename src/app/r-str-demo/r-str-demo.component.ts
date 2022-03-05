import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-r-str-demo',
  templateUrl: './r-str-demo.component.html',
  styleUrls: ['./r-str-demo.component.scss']
})
export class RStrDemoComponent implements OnInit {

  observableDemo$ = new BehaviorSubject<string>('1');
  promiseDemo = Promise.resolve('1');

  constructor() { }

  ngOnInit() {
  }

  changeObservableContent(): void {
    const content = Number(this.observableDemo$.value) + 1;
    this.observableDemo$.next(content.toString())
  }

}
