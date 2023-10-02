import { TestBed } from '@angular/core/testing';

import { VariablesRepositoryDummyImplService } from './variables-repository-dummy-impl.service';

describe('VariablesRepositoryDummyImplService', () => {
  let service: VariablesRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
