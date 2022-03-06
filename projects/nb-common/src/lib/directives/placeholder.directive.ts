import { Directive, HostBinding, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbValueTypeService } from '../services/value-type.service';

@Directive({
  selector: '[nbPlaceholder]'
})
export class NbPlaceholderDirective implements OnChanges, OnDestroy {
  @Input() nbPlaceholder: string | Observable<string> = '';

  @HostBinding('placeholder') placeholder: string = '';

  private destroy$ = new Subject<void>();

  constructor(private valueTypeService: NbValueTypeService) { }

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
      return;
    }
    this.destroy$.next();
    this.nbPlaceholder.pipe(
      takeUntil(this.destroy$)
    ).subscribe(content => this.placeholder = content);
  }

}

