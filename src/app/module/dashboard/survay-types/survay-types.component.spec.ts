import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayTypesComponent } from './survay-types.component';

describe('SurvayTypesComponent', () => {
  let component: SurvayTypesComponent;
  let fixture: ComponentFixture<SurvayTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvayTypesComponent]
    });
    fixture = TestBed.createComponent(SurvayTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
