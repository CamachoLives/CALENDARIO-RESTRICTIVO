import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inicioRoutingModule } from './inicio-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, inicioRoutingModule, HttpClientModule],
})
export class inicioModule {}