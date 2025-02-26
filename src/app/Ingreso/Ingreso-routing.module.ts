import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  LoginComponent from './login/login.component'; 
import DashboardComponent from '../business/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }