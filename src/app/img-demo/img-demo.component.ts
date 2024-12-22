import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GTagService } from '../g-tag.service';

@Component({
    selector: 'app-img-demo',
    templateUrl: './img-demo.component.html',
    styleUrls: ['./img-demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ImgDemoComponent implements OnInit {
  bigImg = 'https://pic2.zhimg.com/v2-77be54b348b0168f3562f51404451aeb_r.jpg';

  loadingImg = './assets/loading.svg';

  errImg = './assets/picture.svg';

  constructor(private gtagService: GTagService) {
    this.gtagService.trackPage({
      page_name: 'img Director',
    });
  }

  ngOnInit() {}
}
