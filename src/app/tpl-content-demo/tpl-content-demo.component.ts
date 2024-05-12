import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GTagService } from '../g-tag.service';

@Component({
  selector: 'app-tpl-content-demo',
  templateUrl: './tpl-content-demo.component.html',
  styleUrls: ['./tpl-content-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TplContentDemoComponent implements OnInit {
  constructor(private gtagService: GTagService) {
    this.gtagService.trackPage({
      page_name: 'tpl content pipe',
    });
  }

  ngOnInit() {}
}
