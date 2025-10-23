import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEdicionComponent } from './pages/user-edicion/user-edicion.component';
import { UserRegistroComponent } from './pages/user-registro/user-registro.component';

import { UserPerfilComponent } from './pages/user-perfil/user-perfil.component';
import { UserConfiguracionComponent } from './pages/user-configuracion/user-configuracion.component';
import { UserInformacionComponent } from './pages/user-informacion/user-informacion.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'user-registro', component: UserRegistroComponent },
      { path: 'user-edicion', component: UserEdicionComponent },
      { path: 'user-perfil', component: UserPerfilComponent },
      { path: 'user-configuracion', component: UserConfiguracionComponent },
      { path: 'user-informacion', component: UserInformacionComponent },

      { path: '', redirectTo: 'user-layout', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
