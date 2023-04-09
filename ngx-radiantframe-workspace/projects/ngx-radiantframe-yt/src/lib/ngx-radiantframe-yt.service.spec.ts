import { TestBed } from '@angular/core/testing';

import { NgxRadiantframeYtService } from './ngx-radiantframe-yt.service';

describe('NgxRadiantframeYtService', () => {
  let service: NgxRadiantframeYtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRadiantframeYtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
