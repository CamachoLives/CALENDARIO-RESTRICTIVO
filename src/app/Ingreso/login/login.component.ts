import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

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
  nombre = '';

  emailr = '';
  passwordr = '';
  nombrer = '';
  errorr = '';

  // Variable para el efecto dinámico
  rightPanelActive = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.data.token);
        this.userService.setUser(
          {
            id: res.data.id,
          },
          3600
        );
        this.router.navigate(['/business/dashboard']);
      },
      error: (err) => {
        this.error = 'Incorrect email or password';
        console.error(err);
      },
    });
  }

  onRegister() {
    // Validaciones simples
    if (!this.nombrer || this.nombrer.trim().length < 3) {
      this.errorr = 'That name is too short';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.emailr || !emailPattern.test(this.emailr)) {
      this.errorr = 'Into a valid email';
      return;
    }

    if (!this.passwordr || this.passwordr.length < 6) {
      this.errorr = 'password must be at least 6 characters long';
      return;
    }

    // Si todo está bien, llama al servicio
    this.authService
      .register(this.nombrer, this.emailr, this.passwordr)
      .subscribe({
        next: (res) => {
          this.authService.saveToken(res.data.user.email);
          this.userService.setUser({ emailr: this.emailr }, 3600);
          this.router.navigate(['/business/dashboard']);
        },
        error: (err) => {
          this.errorr = 'Something went wrong during registration';
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
