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
  shipping: number;
  subtotal: number;
  grandtotal: number;
  proceeded: boolean;

  constructor(
    private getCartDataService: GetCartDataService,
    private getProductsDataService: GetProductsDataService
  ) {
    this.getCartData();
    this.getProductsData();
    this.SHIPPING_PRICE = 23.8;
    this.shipping = this.SHIPPING_PRICE;
    this.proceeded = false;
    this.subtotal = 0;
    this.grandtotal = this.subtotal + this.shipping;
  }

  ngOnInit(): void {
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
    if (newValue > 0 && newValue < 10) {
      item.quantity = newValue;
    }
  }

  deleteItem(item: CartItem) {
    this.cartData = this.cartData.filter(
      (cartItem) => cartItem.productId !== item.productId
    );
  }

  updateCart() {
    this.subtotal = 0;
    this.cartData.forEach(item => this.subtotal += item.quantity * this.getProduct(item.productId).price);
    this.subtotal >= 100 ? this.shipping = 0 : this.shipping = this.SHIPPING_PRICE;
    this.grandtotal = this.subtotal + this.shipping;
  }

  proceedToCheckout() {
    if (this.cartData.length) {
      this.proceeded = true;
    } else {
      alert("Your cart is empty!");
    }
  }
}
