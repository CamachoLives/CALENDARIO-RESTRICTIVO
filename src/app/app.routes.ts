import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Importa el guard

export const routes: Routes = [
  {
    path: 'Ingreso',
    loadChildren: () => import('./Ingreso/Ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./shared/components/shared.module').then(m => m.SharedModule),
    canActivate: [authGuard] // Protege esta ruta
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
    canActivate: [authGuard] // Protege esta ruta
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [authGuard] // Protege esta ruta
  },
  { path: '', redirectTo: 'Ingreso', pathMatch: 'full' },
  { path: '**', redirectTo: 'Ingreso' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
