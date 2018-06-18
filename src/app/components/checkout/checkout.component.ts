import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NotifyComponent } from '../../common/notify/notify.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public carts:any = [];
  private subTotal = 0;
  private deliveryTotal = 0;
  constructor(private http:ProductsService, private notify:NotifyComponent) { }

  ngOnInit() {
    this.carts = this.http.getProductfromCart();
    this.calculate();
  }

  calculate(){
    this.subTotal = 0;
    this.carts.map((obj:any)=>{      
      this.subTotal+=obj.price*obj.qty;
    })
  }

  remove(index){
    this.carts.splice(index,1);
    this.calculate();
    this.http.removeProductItem();
  }

  checkOut(){
    let guitar = {}; guitar["productIds"] = [];
    let acessories = {}; acessories["accessories"] = [];
    this.carts.forEach((item)=>{
      if(item.brandId){
        guitar["productIds"].push(item._id);
      }else{
        acessories["accessories"].push({"id":item._id, "quantity":item.qty})
      }
    }) 

    this.http.postProducts(guitar).subscribe(()=>{
      this.notify.show("Place order successfully");
    });
    this.http.postAccessories(acessories).subscribe(()=>{
      this.notify.show("Place order successfully");
    });
    
    

  }

  OnDestroy(){
    
  }

}
