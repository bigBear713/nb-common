import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsObservable' })
export class NbIsObservablePipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) {}

  transform(value: unknown): value is Observable<unknown> {
    return this.valueTypeService.isObservable(value);
  }
}
