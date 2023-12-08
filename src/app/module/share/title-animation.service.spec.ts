import { TestBed } from '@angular/core/testing';

import { TitleAnimationService } from './title-animation.service';

describe('TitleAnimationService', () => {
  let service: TitleAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
