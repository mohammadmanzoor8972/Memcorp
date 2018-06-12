import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ShopingHomeComponent } from './components/shoping-home/shoping-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ShopingFiltersComponent } from './components/shoping-filters/shoping-filters.component';
import { MatExpansionModule } from '@angular/material/expansion/typings/expansion-module';
import { MatAccordion } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ShopingHomeComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    ShopingFiltersComponent
  ],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    OverlayModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ],
  providers: [HttpClient, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
