import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatIconModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

let modules : any = [
  MatButtonModule, 
  MatToolbarModule,
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule  
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }