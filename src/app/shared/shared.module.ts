import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ // ✅ Importar los standalone components aquí
    CommonModule,
    RouterModule,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [ // ✅ Exportarlos para que otros módulos los usen
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
