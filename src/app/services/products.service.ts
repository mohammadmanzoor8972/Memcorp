import { Injectable, EventEmitter } from '@angular/core';
import { Observable, observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NotifyComponent } from '../components/notify/notify.component';
import { Constant } from './constant';
import { async } from '@angular/core/testing';


@Injectable()
export class ProductsService {
  public cart = [];
  constructor(private http:HttpClient, private notify:NotifyComponent, private CONSTANT : Constant) { }

  getProduct(param): Observable<any[]> {   
    return this.http.post(this.CONSTANT.GETPRODUCTLIST, param).pipe(map((res:any)=>res.response));
  }

  getBrand(){
    return this.http.get(this.CONSTANT.GETBRANDLIST).pipe(map((res:any)=>res.brands));
  }

  getCategory(){
    return this.http.get(this.CONSTANT.GETCATEGORYLIST).pipe(map((res:any)=>res.categories));
  }

  addToCart(product){
    product["qty"] = 1;
    this.cart.forEach((obj)=>{
      if(obj._id==product._id){
        product["qty"]++;       
      }
    })
    const list = this.cart.filter((obj)=>{
      return obj._id==product._id;
    })
    if(list.length==0){
    this.cart.push(product);
    }
    this.notify.show("Product has been added in cart !");
  }    
    
  getProductfromCart(){
    return this.cart;
  }

  getProductCount(){
    return this.cart.length;
  }

  removeProductItem(){
    this.notify.show("Product has been removed from cart !");
  }
  
  getAcessories(param): Observable<any[]> {
    return this.http.post(this.CONSTANT.GETACESSORIES, param).pipe(map((res:any)=>res.accessories));
  }

  postProducts(param){
    return this.http.post(this.CONSTANT.POSTPRODUCT, param);
  }

  postAccessories(param){
    return this.http.post(this.CONSTANT.POSTACCESSORIES, param);
  }

}
