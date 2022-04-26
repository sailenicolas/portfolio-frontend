import { TestBed } from '@angular/core/testing';

import { HttpclientInterceptor } from './httpclient.interceptor';

describe('HttpclientInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpclientInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpclientInterceptor = TestBed.inject(HttpclientInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
