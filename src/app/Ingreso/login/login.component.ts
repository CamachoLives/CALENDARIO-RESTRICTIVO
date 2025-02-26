import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ⬅️ Importa FormsModule
import { Router } from '@angular/router';
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
  passwordFieldType: string = 'password'; // Este es el control para mostrar u ocultar contraseña, es decir el tipo del campo...

  constructor(private router: Router, private authService: AuthService) {} // ✅ Inyectamos el servicio aquí

  validarCredenciales() {
    console.log("1--> ", this.numero);
    console.log("2--> ", this.password);

    if (this.numero && this.authService.login(this.numero, this.password)) {
      console.log('✅ Acceso permitido');
      this.router.navigate(['/business/dashboard']); // 🔹 Redirigir a la ruta protegida
    } else {
      console.log('⛔ Acceso denegadooo');
    }
  }
  

}
