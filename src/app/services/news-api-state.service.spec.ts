import { TestBed } from '@angular/core/testing';

import { NewsApiStateService } from './news-api-state.service';

describe('NewsApiStateService', () => {
  let service: NewsApiStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
