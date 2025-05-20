import { LoginPage } from './login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);
    component = new LoginPage(authServiceSpy, navCtrlSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe navegar a /tabs si el login es exitoso', (done) => {
    authServiceSpy.login.and.returnValue(true);
    component.username = 'admin';
    component.password = 'admin';
    component.onLogin();
    setTimeout(() => {
      expect(navCtrlSpy.navigateRoot).toHaveBeenCalledWith('/tabs');
      done();
    }, 600); // Espera un poco más que la animación
  });

  it('no navega si el login falla', () => {
    authServiceSpy.login.and.returnValue(false);
    component.username = 'admin';
    component.password = 'wrong';
    spyOn(window, 'alert');
    component.onLogin();
    expect(navCtrlSpy.navigateRoot).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Usuario o contraseña incorrectos');
  });
});
