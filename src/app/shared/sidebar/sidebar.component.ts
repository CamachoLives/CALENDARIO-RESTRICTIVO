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
export class SidebarComponent implements OnInit {
  perfil = '';
  photo = 'https://github.com/CamachoLives.png';
  error = '';
  isSidebarOpen = false; // Inicialmente oculto en móviles

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getInformation().subscribe({
      next: (res) => {
        console.log('res --> ', res);
        this.perfil = res.userData.nombre;
      },
      error: (err) => {
        this.error = 'Incorrect email';
        console.error(err);
      },
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
