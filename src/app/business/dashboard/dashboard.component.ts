import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  nombre    = '';
  apellido  = '';
  telefono  =  0;
  correo    = '';
  rol       = '';

   setname(nombre:string, apellido:string, telefono:number, correo:string, rol:string) {

    this.nombre   = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo   = correo;
    this.rol      = rol;

  }
  constructor() {
    this.setname("Cristian", "Camacho", 3148917721, "rfcamacris", "Director");
  }

}
