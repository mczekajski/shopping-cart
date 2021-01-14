import { Component, OnInit } from '@angular/core';
import { GetCartDataService } from 'src/app/services/get-cart-data.service';

@Component({
  selector: 'app-shopping-cart-home',
  templateUrl: './shopping-cart-home.component.html',
  styleUrls: ['./shopping-cart-home.component.scss']
})
export class ShoppingCartHomeComponent implements OnInit {

  constructor(private getCartDataService: GetCartDataService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData() {
    this.getCartDataService.getCartData().subscribe(data => console.log(data));
  }
}
