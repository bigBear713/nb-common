import { ChangeDetectorRef, Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { NbUnsubscribeService } from '../services/unsubscribe.service';
import { NbValueTypeService } from '../services/value-type.service';

@Directive({ standalone: true, selector: '[nbPlaceholder]', providers: [NbUnsubscribeService] })
export class NbPlaceholderDirective implements OnChanges {
  
  @Input() nbPlaceholder: string | Observable<string> = '';

  @HostBinding('placeholder') placeholder: string = '';

  constructor(
    private chageDR: ChangeDetectorRef,
    private unsubscribeService: NbUnsubscribeService,
    private valueTypeService: NbValueTypeService
  ) { }

  ngOnChanges() {
    this.reRender();
  }

  private reRender(): void {
    if (this.valueTypeService.isString(this.nbPlaceholder)) {
      this.placeholder = this.nbPlaceholder;
      this.chageDR.markForCheck();
      return;
    }

    const subscription = this.nbPlaceholder.subscribe(content => this.updatePlaceholder(content));
    this.unsubscribeService.collectASubscriptionByKey('placeholder-content', subscription);
  }

  private updatePlaceholder(content: string): void {
    this.placeholder = content;
    this.chageDR.markForCheck();
  }
}

