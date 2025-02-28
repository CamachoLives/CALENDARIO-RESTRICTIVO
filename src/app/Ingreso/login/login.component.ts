import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ Asegura que los módulos sean válidos
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // 🔹 Corrección: "styleUrl" → "styleUrls"
})
export default class LoginComponent {
  password: string = '';
  numero: number | null = null;
  passwordFieldType: string = 'password';

  constructor(
    private router: Router,
    private authService: AuthService, // ✅ Asegura que este servicio está registrado correctamente
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  validarCredenciales() {
    if (this.numero && this.authService.login(this.numero, this.password)) {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => { 
          this.router.navigate(['/business/dashboard']);
        }, 100);
      }
    } else {
      console.log('⛔ Acceso denegado');
    }
  }
}
