import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
  public cart = [];

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("./assets/products.json")
  }
  addToCart(product){
    product["qty"] = 1;
    this.cart.forEach((obj)=>{
      if(obj.id==product.id){
        product["qty"]++;       
      }
    })
    const list = this.cart.filter((obj)=>{
      return obj.id==product.id;
    })
    if(list.length==0){
    this.cart.push(product);
    }
  }
    
    
  getProductfromCart(){
    return this.cart;
  }

  getProductCount(){
    return this.cart.length;
  }

}
