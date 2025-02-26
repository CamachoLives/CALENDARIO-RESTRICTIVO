import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule {}
