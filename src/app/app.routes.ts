import { Routes, RouterModule } from '@angular/router';
import LoginComponent from './Ingreso/login/login.component';

export const routes: Routes = [

  { path: 'Ingreso', component: LoginComponent },
  { path: '', redirectTo: 'Ingreso', pathMatch: 'full' }, // ✅ Redirige a 'ingreso' por defecto
  { path: '**', redirectTo: 'Ingreso' } // ✅ Captura rutas inválidas

];

export const AppRoutingModule = RouterModule.forRoot(routes);

