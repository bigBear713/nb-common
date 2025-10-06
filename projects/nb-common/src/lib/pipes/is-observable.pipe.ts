import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsObservable' })
export class NbIsObservablePipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): value is Observable<unknown> {
    return this.valueTypeService.isObservable(value);
  }
}
