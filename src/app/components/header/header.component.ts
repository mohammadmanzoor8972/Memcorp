import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private count = 0;
  constructor(private route:Router, public service:ProductsService) { }

  ngOnInit() {
    this.count = this.service.getProductCount();
  }

  searchProduct(input:HTMLInputElement){
    //alert(input.value)
    this.route.navigateByUrl("/home?q="+input.value);
  }

}

