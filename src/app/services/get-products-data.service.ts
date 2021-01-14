import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
    "id": number,
    "name": string,
    "image": string,
    "price": number
}

@Injectable({
  providedIn: 'root'
})
export class GetProductsDataService {

  constructor(private http: HttpClient) {}

  public getProductsData() {
    return this.http.get<Array<Product>>('assets/data/products.json')
  }
}
