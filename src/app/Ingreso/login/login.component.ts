import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ⬅️ Importa FormsModule
import { Router } from '@angular/router';

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

  constructor(private router: Router) {} // 🔹 Inyectar Router en el constructor

  validarCredenciales() {
    console.log("Número ingresado:", this.numero, "Tipo:", typeof this.numero);
    console.log("here 2 -->", this.password );
    if (this.password === 'admin' && Number(this.numero) === 3148917721) { 
      console.log('Acceso permitido');
      this.router.navigate(['/business']); // 🔹 Redirigir a "business"
    } else {
      console.log('Acceso denegado');
    }
  }
  

}
