import { TestBed } from '@angular/core/testing';

import { NgxRadiantframeService } from './ngx-radiantframe.service';

describe('NgxRadiantframeService', () => {
  let service: NgxRadiantframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRadiantframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
