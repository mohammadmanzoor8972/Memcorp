import { Component, OnInit, Output } from '@angular/core';

import { Router, RouterEvent, RouterState } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { EventEmitter } from 'events';
import { NotifyComponent } from '../notify/notify.component';
import { SharedDataService } from '../../services/shared-data.service';

export interface ProductFilterModel {
  "search": string,
  "categoryIds": any[],
  "brandIds": any[],
  "numberOfStrings": any[]
}

@Component({
  selector: 'app-shoping-home',
  templateUrl: './shoping-home.component.html',
  styleUrls: ['./shoping-home.component.css']
})
export class ShopingHomeComponent implements OnInit {
  products;
  private productSearchString = "";
  constructor(private router: Router, private http: ProductsService, private shared:SharedDataService) {


    this.shared.filterProductEvent.subscribe((data) => {
      this.http.getProduct(data).subscribe((resp: any) => {
        this.products = resp;
      });
    })

  }

  addtocart(prod) {
    this.http.addToCart(prod);
  }

  ngOnInit() {
    this.http.getProduct({}).subscribe((resp) => {
      this.products = resp;
    })
  }

  searchFilterEvents(prdouctSearch: ProductFilterModel) {
    prdouctSearch.search = this.productSearchString;
    this.http.getProduct(prdouctSearch).subscribe((resp) => {
      this.products = resp;
    })
  }

  showAccessories(){
    this.shared.acessoriesEvent.emit();
  }



}
