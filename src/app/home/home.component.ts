import { Component, OnInit } from '@angular/core';
import { GetCartDataService } from 'src/app/services/get-cart-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsInCart = 0;

  constructor(private getCartDataService: GetCartDataService) { 
   }

  ngOnInit(): void {
    this.getCartItemsNumber();
  }

  getCartItemsNumber() {
    this.itemsInCart = 0;
    this.getCartDataService.getCartData().subscribe((data) => data.forEach(item => this.itemsInCart += item.quantity));
    return this.itemsInCart;
  }
}
