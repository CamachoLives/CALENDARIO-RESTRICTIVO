import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa esto


@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterModule,CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  perfil = "Cristian Camacho";
  photo = "https://github.com/CamachoLives.png"

  isSidebarOpen = false; // Inicialmente oculto en móviles

  toggleSidebar() {
    console.log("Sidebar antes:", this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log("Sidebar después:", this.isSidebarOpen);
  }
}
