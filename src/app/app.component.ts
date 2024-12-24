import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GTagService } from './g-tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent {
  title = 'nb-common-demo';

  links = [
    {
      title: 'Document',
      link: 'https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.md',
    },
    {
      title: 'Changelog',
      link: 'https://github.com/bigBear713/nb-common/blob/main/CHANGELOG.md',
    },
  ];

  constructor(private gtagService: GTagService) {}

  go2Link(target: { title: string; link: string }): void {
    this.gtagService.trackLink({
      link_name: target.title,
      link: target.link,
    });
  }
}
