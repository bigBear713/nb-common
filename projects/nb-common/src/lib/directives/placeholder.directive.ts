import { ChangeDetectorRef, Directive, HostBinding, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbValueTypeService } from '../services/value-type.service';

@Directive({ selector: '[nbPlaceholder]' })
export class NbPlaceholderDirective implements OnChanges, OnDestroy {
  @Input() nbPlaceholder: string | Observable<string> = '';

  @HostBinding('placeholder') placeholder: string = '';

  private destroy$ = new Subject<void>();

  constructor(
    private chageDR: ChangeDetectorRef,
    private valueTypeService: NbValueTypeService
  ) { }

  ngOnChanges() {
    this.reRender();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private reRender(): void {
    if (this.valueTypeService.isString(this.nbPlaceholder)) {
      this.placeholder = this.nbPlaceholder;
      this.chageDR.markForCheck();
      return;
    }
    // end the prev subscribtion if it exists
    this.destroy$.next();
    this.nbPlaceholder.pipe(
      takeUntil(this.destroy$)
    ).subscribe(content => this.updatePlaceholder(content));
  }

  private updatePlaceholder(content: string): void {
    this.placeholder = content;
    this.chageDR.markForCheck();
  }
}

