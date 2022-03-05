import { Directive, HostBinding, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ValueTypeService } from '../services/value-type.service';

@Directive({
  selector: '[placeholderStr]'
})
export class PlaceholderStrDirective implements OnChanges, OnDestroy {
  @Input() placeholderStr: string | Observable<string> = '';

  @HostBinding('placeholder') placeholder: string = '';

  private destroy$ = new Subject<void>();

  constructor(private valueTypeService: ValueTypeService) { }

  ngOnChanges() {
    this.reRender();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private reRender(): void {
    if (this.valueTypeService.isString(this.placeholderStr)) {
      this.placeholder = this.placeholderStr;
      return;
    }
    this.destroy$.next();
    this.placeholderStr.pipe(
      takeUntil(this.destroy$)
    ).subscribe(content => this.placeholder = content);
  }

}

