import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CartItem {
    "productId": number,
    "quantity": number
}

@Injectable({
  providedIn: 'root'
})
export class GetCartDataService {

  constructor(private http: HttpClient) {}

  public getCartData() {
    return this.http.get<Array<CartItem>>('assets/data/cart_products.json')
  }
}
