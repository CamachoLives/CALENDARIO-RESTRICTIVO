import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const authService = inject(AuthService);

  // Verificamos si estamos en el navegador antes de acceder a localStorage
  if (!isPlatformBrowser(platformId)) {
    return false;
  }

  // Verificar si hay token y si es válido
  const token = authService.getToken();
  if (!token) {
    router.navigate(['/Ingreso']);
    return false;
  }

  // Verificar token con el servidor (opcional, para mayor seguridad)
  authService.verifyToken().subscribe({
    next: () => {
      // Token válido, permitir acceso
      return true;
    },
    error: () => {
      // Token inválido, limpiar y redirigir
      authService.logout();
      router.navigate(['/Ingreso']);
      return false;
    },
  });

  return true;
};
