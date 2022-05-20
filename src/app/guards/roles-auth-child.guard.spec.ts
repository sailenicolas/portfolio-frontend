import { TestBed } from '@angular/core/testing';

import { RolesAuthChildGuard } from './roles-auth-child.guard';

describe('RolesAuthChildGuard', () => {
  let guard: RolesAuthChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolesAuthChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
