import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ShopingHomeComponent } from './components/shoping-home/shoping-home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orderconfirm',
    component: OrderConfirmationComponent
  },
  {
    path: 'home',
    component: ShopingHomeComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}