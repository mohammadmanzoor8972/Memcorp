import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
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
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotifyComponent } from './components/notify/notify.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { Constant } from './services/constant';
import { FilterPipe } from './services/filter.pipes';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ShopingHomeComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    ShopingFiltersComponent,
    ProductDetailsComponent,
    NotifyComponent,
    AccesoriesComponent,
    FilterPipe,
    LoaderComponent
  ],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ],
  providers: [HttpClient, ProductsService, NotifyComponent, Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
