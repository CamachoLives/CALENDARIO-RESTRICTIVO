import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConsultaComponent } from './pages/user-consulta/user-consulta.component';
import { UserEdicionComponent } from './pages/user-edicion/user-edicion.component';
import { UserRegistroComponent } from './pages/user-registro/user-registro.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // ✅ Define las rutas internas dentro del layout
      { path: 'user-consulta', component: UserConsultaComponent },
      { path: 'user-registro', component: UserRegistroComponent },
      { path: 'user-edicion', component: UserEdicionComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
