import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  login(numero: any, password: string): boolean {
  
    const numeroConvertido = Number(numero); // 🔹 Convertir a número
  
    if (password === 'admin' && numeroConvertido === 3148917721) {
      localStorage.setItem('authToken', 'authenticated');
      return true;
    }
  
    return false;
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      return token !== null;
    }
    return false; // 🚨 Si no es el navegador, devuelve false
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
