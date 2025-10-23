import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacionComponent } from './pages/parametrizacion/parametrizacion.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {path: '',
      component: LayoutComponent,
    children:[
  { path: 'parametrizacion', component: ParametrizacionComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: 'parametrizacion', pathMatch: 'full' }
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule {}