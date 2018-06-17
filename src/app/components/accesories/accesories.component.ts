import { Component} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent {

  public acessories:any;
  
  constructor(private service:ProductsService, private shared:SharedDataService) { 
    this.shared.acessoriesEvent.subscribe(()=>{
      this.acessories = [];
      this.service.getAcessories({}).subscribe((res)=>{
        this.acessories = res;
        console.log(res)
      })
    })
  }

  addToCart(item){
    this.service.addToCart(item);
  }
}
