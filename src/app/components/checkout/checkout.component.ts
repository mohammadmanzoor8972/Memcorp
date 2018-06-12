import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public carts = [];
  public finalCart = [];
  public mycarts = [];
  private subTotal = 0;
  private deliveryTotal = 0;
  constructor(private http:ProductsService) { }

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
  }

}
