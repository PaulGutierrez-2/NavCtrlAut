import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

// Crea un mock de AuthService
class MockAuthService {
  authenticated = false;
  isAuthenticated() {
    return this.authenticated;
  }
}

// Crea un mock de Router
class MockRouter {
  parseUrl(url: string) {
    return new UrlTree();
  }
}

describe('authGuard', () => {
  let mockAuthService: MockAuthService;
  let mockRouter: MockRouter;
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    mockAuthService = new MockAuthService();
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    // Helper para ejecutar el guard en el contexto de inyección
    executeGuard = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  });

  it('debe permitir acceso si el usuario está autenticado', () => {
    // Simula usuario autenticado
    mockAuthService.authenticated = true;
    const result = executeGuard({} as any, {} as any);
    expect(result).toBeTrue(); // El guard retorna true
  });

  it('debe redirigir si el usuario NO está autenticado', () => {
    // Simula usuario NO autenticado
    mockAuthService.authenticated = false;
    spyOn(mockRouter, 'parseUrl').and.callThrough();
    const result = executeGuard({} as any, {} as any);
    expect(mockRouter.parseUrl).toHaveBeenCalled(); // Se llama a parseUrl
    expect(result instanceof UrlTree).toBeTrue(); // El guard retorna un UrlTree
  });
});
