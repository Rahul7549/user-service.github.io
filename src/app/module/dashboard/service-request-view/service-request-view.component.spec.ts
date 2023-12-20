import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestViewComponent } from './service-request-view.component';

describe('ServiceRequestViewComponent', () => {
  let component: ServiceRequestViewComponent;
  let fixture: ComponentFixture<ServiceRequestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceRequestViewComponent]
    });
    fixture = TestBed.createComponent(ServiceRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
