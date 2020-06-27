import { TestBed } from '@angular/core/testing';

import { NodeapisService } from './nodeapis.service';

describe('NodeapisService', () => {
  let service: NodeapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
