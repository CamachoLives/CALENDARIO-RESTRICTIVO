import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Ingreso', // ✅ Especificamos un path explícito para el módulo de Ingreso
    loadChildren: () => import('./Ingreso/Ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'layout', // ✅ Definimos el path para el módulo Business
    loadChildren: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent)
  },
  {
    path: 'business', // ✅ Definimos el path para el módulo Business
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
  },
  { path: '', redirectTo: 'Ingreso', pathMatch: 'full' }, // ✅ Redirige a 'ingreso' correctamente
  { path: '**', redirectTo: 'Ingreso' } // ✅ Captura rutas inválidas
];

export const AppRoutingModule = RouterModule.forRoot(routes);
