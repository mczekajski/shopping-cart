import { Component, OnInit } from '@angular/core';
import { GetCartDataService } from 'src/app/services/get-cart-data.service';
import { GetProductsDataService } from 'src/app/services/get-products-data.service';
import { CartItem } from 'src/app/services/get-cart-data.service';
import { Product } from 'src/app/services/get-products-data.service';

@Component({
  selector: 'app-shopping-cart-home',
  templateUrl: './shopping-cart-home.component.html',
  styleUrls: ['./shopping-cart-home.component.scss'],
})
export class ShoppingCartHomeComponent implements OnInit {
  cartData: Array<CartItem>;
  productsData: Array<Product>;
  SHIPPING_PRICE: number;

  constructor(
    private getCartDataService: GetCartDataService,
    private getProductsDataService: GetProductsDataService
  ) {
    this.SHIPPING_PRICE = 23.8;
  }

  ngOnInit(): void {
    this.getCartData();
    this.getProductsData();
  }

  getCartData() {
    this.getCartDataService
      .getCartData()
      .subscribe((data) => (this.cartData = data));
  }

  getProductsData() {
    this.getProductsDataService
      .getProductsData()
      .subscribe((data) => (this.productsData = data));
  }

  getProduct(id: number) {
    const product = this.productsData.find((value) => value.id === id);
    return product;
  }

  getCartItem(id: number) {
    const item = this.cartData.find((value) => value.productId === id);
    return item;
  }

  changeQuantity(value: number, id: number) {
    const item = this.getCartItem(id);
    let newValue = item.quantity + value;
    if (newValue >= 0 && newValue < 10) {
      item.quantity = newValue;
    }
  }

  consoleLogData() {
    console.log(this.cartData.length);
  }
}
