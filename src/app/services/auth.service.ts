import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    console.log("autenticacion");
    return !!localStorage.getItem('userToken');  // Verifica si hay token
  }

  login(numero: number, password: string): boolean {
    if (password == 'admin' && numero == 3148917721) {
      localStorage.setItem('authToken', 'authenticated');
      console.log("aca");
      return true;
      
    }
    return false;
  }
}
