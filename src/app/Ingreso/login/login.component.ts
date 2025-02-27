import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ⬅️ Importa FormsModule
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  password: string = ''; // Aquí se almacenará la contraseña ingresada en el html
  numero: number | null = null; // Aquí se almacenará el numero ingresado en el html 
  passwordFieldType: string = 'password'; // Este es el control para mostrar u ocultar contraseña

  constructor(
    private router: Router, 
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object // 🔹 Detecta si está en navegador o servidor
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
