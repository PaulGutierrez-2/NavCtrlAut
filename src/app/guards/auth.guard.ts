import { CanActivateFn, Router } from '@angular/router'; // Importa Router para navegación y CanActivateFn para guards
import { inject } from '@angular/core'; // Importa inject para inyección de dependencias
import { AuthService } from '../services/auth.service'; // Importa AuthService para manejo de autenticación

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica si el usuario está autenticado (si hay token)
  if (authService.isAuthenticated()) {
    return true;
  } else {
    return router.parseUrl(router.url); // Redirige si no está autenticado
  }
};
