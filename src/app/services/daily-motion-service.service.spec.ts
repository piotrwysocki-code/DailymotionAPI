import { TestBed } from '@angular/core/testing';

import { DailyMotionServiceService } from './daily-motion-service.service';

describe('DailyMotionServiceService', () => {
  let service: DailyMotionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyMotionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
