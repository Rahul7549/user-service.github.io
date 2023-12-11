import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradNavbarComponent } from './dashborad-navbar.component';

describe('DashboradNavbarComponent', () => {
  let component: DashboradNavbarComponent;
  let fixture: ComponentFixture<DashboradNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradNavbarComponent]
    });
    fixture = TestBed.createComponent(DashboradNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
