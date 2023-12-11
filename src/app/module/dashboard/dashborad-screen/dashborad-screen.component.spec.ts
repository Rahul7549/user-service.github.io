import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradScreenComponent } from './dashborad-screen.component';

describe('DashboradScreenComponent', () => {
  let component: DashboradScreenComponent;
  let fixture: ComponentFixture<DashboradScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradScreenComponent]
    });
    fixture = TestBed.createComponent(DashboradScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
