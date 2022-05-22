import { TestBed } from '@angular/core/testing';

import { RouterHelpService } from './router-help.service';

describe('RouterHelpService', () => {
  let service: RouterHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
