import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule } from './business-routing.module';
import DashboardComponent from './dashboard/dashboard.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardComponent, BusinessRoutingModule,LayoutComponent],
})
export class BusinessModule {}
