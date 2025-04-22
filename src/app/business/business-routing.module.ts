import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DashboardComponent from './dashboard/dashboard.component';
import ProfileComponent from './profile/profile.component';
import TablesComponent from './tables/tables.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';

const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      // ✅ Define las rutas internas dentro del layout
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'tables', component: TablesComponent },
    ],
  },
];

// hOLA

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
