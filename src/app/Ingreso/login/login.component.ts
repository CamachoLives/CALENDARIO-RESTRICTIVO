import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export default class LoginComponent {
  email = '';
  password = '';
  error = '';

  // Variable para el efecto dinámico
  rightPanelActive = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        setTimeout(() => {
          this.router.navigate(['/business/dashboard']);
        }, 100);
      },
      error: (err) => {
        this.error = 'Incorrect email or password';
        console.error(err);
      },
    });
  }

  // Funciones para cambiar entre Sign In / Sign Up
  toggleSignUp() {
    this.rightPanelActive = true;
  }

  toggleSignIn() {
    this.rightPanelActive = false;
  }
}
