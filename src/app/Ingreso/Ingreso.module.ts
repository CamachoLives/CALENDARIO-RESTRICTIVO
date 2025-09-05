import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './Ingreso-routing.module'; // ✅ Importa el enrutador de Ingreso
import LoginComponent from './login/login.component'; // ✅ Importa el componente standalone
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
