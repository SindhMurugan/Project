import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDescComponent } from './products-desc.component';

describe('ProductsDescComponent', () => {
  let component: ProductsDescComponent;
  let fixture: ComponentFixture<ProductsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
