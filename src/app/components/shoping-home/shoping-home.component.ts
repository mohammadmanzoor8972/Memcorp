import { Component, OnInit, Output } from '@angular/core';

import { Router, RouterEvent, RouterState } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-shoping-home',
  templateUrl: './shoping-home.component.html',
  styleUrls: ['./shoping-home.component.css']
})
export class ShopingHomeComponent implements OnInit {
  products;
  constructor(private router:Router, private http:ProductsService) {
  
    this.router.events.subscribe((e:any) => {
      if(e.state && e.state.root && e.state.root.queryParams && e.state.root.queryParams){
      this.http.getProduct().subscribe((resp:any)=>{
        this.products = resp.filter(obj=>{
          if(e.state.root.queryParams.q){
          return obj.name.toLocaleLowerCase().indexOf(e.state.root.queryParams.q.toLocaleLowerCase()) !=-1;
          } else {return obj};
        });
     
      })
    }
    });
  }

   addtocart(prod){
    this.http.addToCart(prod);
   
   }


  ngOnInit() {
    this.http.getProduct().subscribe((resp)=>{
      this.products = resp;
    })
    
  }

}
