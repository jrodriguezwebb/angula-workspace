import { TestBed } from '@angular/core/testing';

import { HelloWorldConfigService } from './hello-world-config.service';

describe('HelloWorldConfigService', () => {
  let service: HelloWorldConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
