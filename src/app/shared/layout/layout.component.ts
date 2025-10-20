import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  user = '';
  error = '';
  constructor(private userService: UserService) {}
  ngOnInit() {
    // Intenta obtener el usuario del sessionStorage primero
    const storedUser = this.userService.loadUser(); // <-- aquí cargas el usuario
    if (storedUser) {
      this.user = storedUser.nombre;
    } else {
      this.userService.getInformation().subscribe({
        next: (res) => {
          this.userService.setUser(res.body, 3600); // guarda por 1 hora o el tiempo de tu token
          this.user = res.body.nombre;
        },
        error: (err) => {
          this.error = 'Incorrect email';
          console.error(err);
        },
      });
    }
  }
}
