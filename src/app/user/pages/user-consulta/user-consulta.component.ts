import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-consulta',
  standalone: true,
  imports: [],
  templateUrl: './user-consulta.component.html',
  styleUrl: './user-consulta.component.css'
})
export class UserConsultaComponent {
  
  Name = "Cristian Camacho"
  Company = "Incocredito"
  Group = "Desarrollo de la Tecnologia"
  Role = "Ingeniero de Desarrollo"
  Email = "IntraPruebas@gmail.com"
  Phone = "3148917721"
  Hobbies = "Futbol, Candelear, Deporte, Estudiar"

  photo = "https://github.com/CamachoLives.png"
  userId ="Cris"
  constructor(private router: Router) {}

  editarUsuario() {
    this.router.navigate(['user/user-edicion']);
  }
}
