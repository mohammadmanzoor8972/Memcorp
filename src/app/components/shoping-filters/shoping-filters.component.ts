import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-shoping-filters',
  templateUrl: './shoping-filters.component.html',
  styleUrls: ['./shoping-filters.component.css']
})
export class ShopingFiltersComponent implements OnInit {

  options: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  ngOnInit() {
  }

}
