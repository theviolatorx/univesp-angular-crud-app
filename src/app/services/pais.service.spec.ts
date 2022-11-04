import { TestBed } from '@angular/core/testing';

import { PaiService } from './pais.service';

describe('PaiService', () => {
  let service: PaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
