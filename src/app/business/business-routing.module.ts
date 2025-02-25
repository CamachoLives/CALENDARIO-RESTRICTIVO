import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  DashboardComponent from './dashboard/dashboard.component'; 
import  ProfileComponent  from './profile/profile.component';
import  TablesComponent  from './tables/tables.component';
import  UserComponent  from './user/user.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },  
  { path: '', component: DashboardComponent },  
  { path: '', component: ProfileComponent },
  { path: '', component: TablesComponent },
  { path: '', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
