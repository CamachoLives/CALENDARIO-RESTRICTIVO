import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './interfaz/inicio.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  
  {path: '', component: LayoutComponent,},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class inicioRoutingModule {}