import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: 'business',
          loadChildren: () => import('../../business/business.module').then(m => m.BusinessModule)
        },
        {
          path: 'user',
          loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
        }
      ]
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
