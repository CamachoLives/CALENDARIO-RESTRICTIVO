import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IftaLabelModule } from 'primeng/iftalabel';


@Component({
  selector: 'app-user-consulta',
  standalone: true,
  imports: [],
  templateUrl: './user-consulta.component.html',
  styleUrl: './user-consulta.component.css'
})
export class UserConsultaComponent {
  photo = "https://github.com/CamachoLives.png"
  userId ="Cris"
  constructor(private router: Router) {}

  editarUsuario() {
    console.log("Aqui");
    this.router.navigate(['user/user-edicion']);
  }
}
