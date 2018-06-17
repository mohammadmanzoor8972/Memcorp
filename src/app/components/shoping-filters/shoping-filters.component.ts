import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { SharedDataService } from '../../services/shared-data.service';
@Component({
  selector: 'app-shoping-filters',
  templateUrl: './shoping-filters.component.html',
  styleUrls: ['./shoping-filters.component.css']
})
export class ShopingFiltersComponent implements OnInit {

  options: FormGroup;
  public brand = [];
  public category = [];
  public filter:any = {
    "search": "",
    "categoryIds": [],
    "brandIds": [],
    "numberOfStrings": []
  }

  constructor(fb: FormBuilder, private service: ProductsService, private shared:SharedDataService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  filterBrand(tt:any){
    if(tt.value=="false"){
    this.filter.brandIds.push(tt.id)
    } else {
      this.filter.brandIds.splice(this.filter.brandIds.indexOf(tt.id), 1);
    }

    this.shared.filterProductEvent.emit(this.filter);
    console.log(this.filter);
  }


  filterCategory(tt:any){
    if(tt.value=="false"){
     this.filter.categoryIds.push(tt.id)
    } else {
      this.filter.categoryIds.splice(this.filter.categoryIds.indexOf(tt.id), 1);
    }
    this.shared.filterProductEvent.emit(this.filter);
    console.log(this.filter);
  }
  
  filterString(tt:any){
    if(tt.value=="false"){
     this.filter.numberOfStrings.push(tt.id )
    } else {
      this.filter.numberOfStrings.splice(this.filter.numberOfStrings.indexOf(tt.id ), 1);
    }
    this.shared.filterProductEvent.emit(this.filter);
    console.log(this.filter);
  }
  

  ngOnInit() {
    this.service.getBrand().subscribe((res)=>{
      console.log(res)
      this.brand = res;
    })

    this.service.getCategory().subscribe((res)=>{
      this.category = res;
    })
  }

}
