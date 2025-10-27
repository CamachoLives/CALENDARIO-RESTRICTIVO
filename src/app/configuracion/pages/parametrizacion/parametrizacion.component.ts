import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parametrizacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './parametrizacion.component.html',
  styleUrl: './parametrizacion.component.css'
})
export class ParametrizacionComponent {

isEditable = false;

  toggleEdit(): void {
    this.isEditable = !this.isEditable;
  }



config = {
    color: '#ffffff',
    ruta: '',
    idioma: 'es',
    tiempoSesion: 30,
    fa2: false,
    dashboard: true,
    carousel: true,
    passwordPolicy: {
      longitud: 8,
      caducidad: 90
    }
  };

  onLogoChange(event: any) {
    const file = event.target.files[0];
    console.log('Logo seleccionado:', file);
  }

  guardarConfiguracion() {
    console.log('Configuración guardada:', this.config);
    // Aquí puedes llamar a tu servicio para persistir la configuración
  }


  modulos = [
    { nombre: 'Mejoramiento continuo', activo: false },
    { nombre: 'Consultas', activo: false },
    { nombre: 'Auditorías', activo: false },
    { nombre: 'Recursos Humanos', activo: false },
    { nombre: 'SGSST', activo: false },
    { nombre: 'Proveedores', activo: false }
  ];

  toggleModulo(modulo: any): void {
    modulo.activo = !modulo.activo;
  }

  
}
