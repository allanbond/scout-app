import { TestBed, inject } from '@angular/core/testing';

import { ScoutService } from './scout.service';

describe('ScoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoutService]
    });
  });

  it('should be created', inject([ScoutService], (service: ScoutService) => {
    expect(service).toBeTruthy();
  }));
});
