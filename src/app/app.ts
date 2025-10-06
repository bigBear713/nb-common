import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { GTagService } from './g-tag.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private gtagService:GTagService = inject(GTagService);

  protected readonly title = signal('nb-common-demo');

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

  go2Link(target: { title: string; link: string }): void {
    this.gtagService.trackLink({
      link_name: target.title,
      link: target.link,
    });
  }
}
