import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa esto
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  perfil = '';
  photo = 'https://github.com/CamachoLives.png';
  error = '';
  isSidebarOpen = false; // Inicialmente oculto en móviles

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
