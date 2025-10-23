import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // IMPORTA ESTO
import { UserRoutingModule } from './user-routing.module';
import { UserEdicionComponent } from './pages/user-edicion/user-edicion.component';
import { UserRegistroComponent } from './pages/user-registro/user-registro.component';

import { UserPerfilComponent } from './pages/user-perfil/user-perfil.component';
import { UserConfiguracionComponent } from './pages/user-configuracion/user-configuracion.component';
import { UserInformacionComponent } from './pages/user-informacion/user-informacion.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    UserEdicionComponent,
    UserRegistroComponent,
    UserPerfilComponent,
    UserConfiguracionComponent,
    UserInformacionComponent,
    UserLayoutComponent,
  ],
})
export class UserModule {}
