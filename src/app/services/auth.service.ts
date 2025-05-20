import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Verifica usuario y contraseña, guarda un token en localStorage si es correcto
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  // Elimina el token del localStorage para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }

  // Verifica si existe un token en localStorage (usuario autenticado)
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
