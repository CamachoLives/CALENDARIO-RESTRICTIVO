import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Importa el guard

export const routes: Routes = [
  {
    path: 'Ingreso',
    loadChildren: () => import('./Ingreso/Ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard] // Protege esta ruta
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
    canActivate: [authGuard] // Protege esta ruta
  },
  { path: '', redirectTo: 'Ingreso', pathMatch: 'full' },
  { path: '**', redirectTo: 'Ingreso' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
