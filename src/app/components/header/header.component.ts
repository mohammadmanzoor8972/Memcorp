import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private count = 0;
  public filter:any = {
    "search": "",
    "categoryIds": [],
    "brandIds": [],
    "numberOfStrings": []
  }

  constructor(private route:Router, public service:ProductsService, private shared:SharedDataService) { }

  ngOnInit() {
    this.count = this.service.getProductCount();
  }

  searchProduct(input:HTMLInputElement){
   this.shared.filterProductEvent.emit(this.filter);
  }

}

