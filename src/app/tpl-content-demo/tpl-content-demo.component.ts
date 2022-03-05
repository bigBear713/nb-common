import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-content-demo',
  templateUrl: './tpl-content-demo.component.html',
  styleUrls: ['./tpl-content-demo.component.scss']
})
export class TplContentDemoComponent implements OnInit {

  tplContentCode = `<ng-container *ngTemplateOutlet="tpl | tplContent"></ng-container>
    <ng-template #tpl> template content </ng-template>`;

  constructor() { }

  ngOnInit() {
  }

}
