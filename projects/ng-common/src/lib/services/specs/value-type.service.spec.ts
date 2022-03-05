import { TestBed } from '@angular/core/testing';
import { ValueTypeService } from '../value-type.service';

describe('Service: ValueType', () => {
  let service: ValueTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueTypeService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ValueTypeService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
