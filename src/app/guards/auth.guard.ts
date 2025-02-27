import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  
  // Verificamos si estamos en el navegador antes de acceder a localStorage
  let isAuthenticated = false;
  if (isPlatformBrowser(platformId)) {
    isAuthenticated = localStorage.getItem('authToken') !== null;
  }

  if (!isAuthenticated) {
    router.navigate(['/Ingreso']); // Cambia esto si tu login está en otra ruta
    return false;
  }
  
  return true;
};
