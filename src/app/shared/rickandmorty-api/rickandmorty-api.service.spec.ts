import { TestBed } from '@angular/core/testing';

import { RickandmortyApiService } from './rickandmorty-api.service';

describe('RickandmortyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickandmortyApiService = TestBed.get(RickandmortyApiService);
    expect(service).toBeTruthy();
  });
});
