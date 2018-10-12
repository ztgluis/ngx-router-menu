import { TestBed } from '@angular/core/testing';

import { NgxRouterMenuService } from './ngx-router-menu.service';

describe('NgxRouterMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRouterMenuService = TestBed.get(NgxRouterMenuService);
    expect(service).toBeTruthy();
  });
});
