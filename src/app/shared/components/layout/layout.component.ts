import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../../services/user.service';

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
    this.userService.getInformation().subscribe({
      next: (res) => {
        this.user = res.body.nombre;
        localStorage.setItem('user', this.user);
      },
      error: (err) => {
        this.error = 'Incorrect email';
        console.error(err);
      },
    });
  }
}
