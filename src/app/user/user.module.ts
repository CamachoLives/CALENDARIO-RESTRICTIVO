import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // IMPORTA ESTO
import { UserRoutingModule } from './user-routing.module';
import { UserConsultaComponent } from './pages/user-consulta/user-consulta.component';
import { UserEdicionComponent } from './pages/user-edicion/user-edicion.component';
import { UserRegistroComponent } from './pages/user-registro/user-registro.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    UserConsultaComponent,
    UserEdicionComponent,
    UserRegistroComponent,
  ],
})
export class UserModule {}
