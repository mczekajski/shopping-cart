import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartHomeComponent } from './shopping-cart-home/shopping-cart-home.component';

const routes: Routes = [
  { path: '', component: ShoppingCartHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
