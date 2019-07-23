import { TestBed, inject } from '@angular/core/testing';

import { CoursedetailsService } from './coursedetails.service';

describe('CoursedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursedetailsService]
    });
  });

  it('should be created', inject([CoursedetailsService], (service: CoursedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
