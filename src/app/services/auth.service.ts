import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Simulación de autenticación (cambiar por una lógica real con backend)
  isAuthenticated(): boolean {
    return !!localStorage.getItem('userToken'); // Devuelve true si hay un token guardado
  }

  login(token: string) {
    localStorage.setItem('userToken', token);
  }

  logout() {
    localStorage.removeItem('userToken');
  }
}
