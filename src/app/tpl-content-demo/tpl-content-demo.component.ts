import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-content-demo',
  templateUrl: './tpl-content-demo.component.html',
  styleUrls: ['./tpl-content-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TplContentDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
