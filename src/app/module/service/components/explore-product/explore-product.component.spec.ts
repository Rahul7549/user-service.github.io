import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductComponent } from './explore-product.component';

describe('ExploreProductComponent', () => {
  let component: ExploreProductComponent;
  let fixture: ComponentFixture<ExploreProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreProductComponent]
    });
    fixture = TestBed.createComponent(ExploreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
