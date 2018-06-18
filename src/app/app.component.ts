import { Component } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = true;
  constructor(private shared:SharedDataService){
    

    shared.isLoading.subscribe((res)=>{
        this.isLoading = res;
    })
  }

  
}
