import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  DashboardComponent from './dashboard/dashboard.component'; 
import  ProfileComponent  from './profile/profile.component';
import  TablesComponent  from './tables/tables.component';
import  UserComponent  from './user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'profile', component: ProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
