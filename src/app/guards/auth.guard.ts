import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    console.log("⛔ Acceso denegado. Redirigiendo al login...");
    router.navigate(['/Ingreso']); // 🔹 Cambia esto si tu login está en otro path
    return false;
  }
  return true;
};
