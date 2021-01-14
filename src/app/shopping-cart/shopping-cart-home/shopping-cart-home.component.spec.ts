import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartHomeComponent } from './shopping-cart-home.component';

describe('ShoppingCartHomeComponent', () => {
  let component: ShoppingCartHomeComponent;
  let fixture: ComponentFixture<ShoppingCartHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
