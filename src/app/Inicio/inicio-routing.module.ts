import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './interfaz/inicio.component';

const routes: Routes = [{ path: '', component: inicioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class inicioRoutingModule {}
