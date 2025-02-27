import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  login(numero: any, password: string): boolean {
    console.log("🔍 Revisando login:", numero, typeof numero, password);
  
    const numeroConvertido = Number(numero); // 🔹 Convertir a número
  
    if (password === 'admin' && numeroConvertido === 3148917721) {
      console.log("✅ Credenciales correctas");
      localStorage.setItem('authToken', 'authenticated');
      console.log("🔐 Token guardado:", localStorage.getItem('authToken'));
      return true;
    }
  
    console.log("⛔ Credenciales incorrectas");
    return false;
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      console.log('🔍 Revisando autenticación...', token);
      return token !== null;
    }
    return false; // 🚨 Si no es el navegador, devuelve false
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('🚪 Cerrando sesión...');
      localStorage.removeItem(this.tokenKey);
    }
  }
}
