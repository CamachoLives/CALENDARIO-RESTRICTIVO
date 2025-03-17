import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './Ingreso-routing.module'; // ✅ Importa el enrutador de Ingreso
import LoginComponent from './login/login.component'; // ✅ Importa el componente standalone

@NgModule({
  declarations: [], // ✅ Declara los componentes de este módulo
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule, // ✅ Importa el módulo de rutas
    LoginComponent,
  ],
})
export class IngresoModule {}
