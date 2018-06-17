import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: any = {};

  constructor( private http: ProductsService) {
    let param = {}
        this.http.getProduct(param).subscribe((resp: any) => {
          this.product = resp.find(obj => {
              return obj._id ==location.pathname.split('/').pop();
          });
        })
  }
  ngOnInit() {
  }


  addtoCart(){
    this.http.addToCart(this.product);
  }

}
