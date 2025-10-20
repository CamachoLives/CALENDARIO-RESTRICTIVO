import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: 'Inicio',
          loadComponent: () => import('../Inicio/inicio.module').then(m => m.inicioModule)
        },
        {
          path: 'user',
          loadChildren: () => import('../user/user.module').then(m => m.UserModule)
        }
      ]
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
