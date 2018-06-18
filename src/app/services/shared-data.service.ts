import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
 acessoriesEvent = new EventEmitter<any>();
 filterProductEvent = new EventEmitter<any>();  
 isLoading = new EventEmitter<any>();
}
