import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRouterMenuComponent } from './ngx-router-menu.component';

describe('NgxRouterMenuComponent', () => {
  let component: NgxRouterMenuComponent;
  let fixture: ComponentFixture<NgxRouterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRouterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRouterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
