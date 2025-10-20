import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './Ingreso-routing.module';
import LoginComponent from './login/login.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule, 
    LoginComponent,
    HttpClientModule,
  ],
})
export class IngresoModule {}
