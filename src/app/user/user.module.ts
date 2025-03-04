import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // IMPORTA ESTO
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
