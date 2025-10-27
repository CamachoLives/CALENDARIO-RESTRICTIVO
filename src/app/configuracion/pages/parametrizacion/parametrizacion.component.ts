import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Guardado {
  success: boolean;
  message: string;
  data: {
    token: string;
    id: number;
  };
}

@Component({
  selector: 'app-parametrizacion',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './parametrizacion.component.html',
  styleUrl: './parametrizacion.component.css',
})
export class ParametrizacionComponent {
  //Variables 
  private apiUrl = 'http://localhost:7000/administracion/parametrizacion';
  private readonly tokenKey = 'authToken';
  constructor(private http: HttpClient) {}
  isEditable = false;

  logo = ''
  color = ''
  path = ''
  toggleEdit(): void {
    this.isEditable = !this.isEditable;
  }
  onLogoChange(event: any) {
    const file = event.target.files[0];
    console.log("Aqui el archiv --> ", file)
  }

  resultados(){
    const json = {
      logo : this.logo,
      color: this.color,
      path : this.path
    }
    console.log("json --> ", json.color,json.logo,json.path)
  }

   Save(email: string, password: string): Observable<Guardado> {
      return this.http
        .post<Guardado>(`${this.apiUrl}/login`, {
          email,
          password,
        })
        .pipe(catchError(this.handleError));
    }

  modulos = [
    { nombre: 'Mejoramiento continuo', activo: false },
    { nombre: 'Consultas', activo: false },
    { nombre: 'Auditorías', activo: false },
    { nombre: 'Recursos Humanos', activo: false },
    { nombre: 'SGSST', activo: false },
    { nombre: 'Proveedores', activo: false },
  ];

  toggleModulo(modulo: any): void {
    modulo.activo = !modulo.activo;
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error ${error.status}: ${error.statusText}`;
      }
    }

    console.error('AuthService Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
