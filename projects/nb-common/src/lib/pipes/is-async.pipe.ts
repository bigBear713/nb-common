import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsAsync' })
export class NbIsAsyncPipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): value is Observable<unknown> | Promise<unknown> {
    return this.valueTypeService.isObservable(value) || this.valueTypeService.isPromise(value);
  }
}
