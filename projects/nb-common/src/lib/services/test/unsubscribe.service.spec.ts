/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UnsubscribeService } from '../unsubscribe.service';

describe('Service: Unsubscribe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsubscribeService]
    });
  });

  it('should ...', inject([UnsubscribeService], (service: UnsubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
