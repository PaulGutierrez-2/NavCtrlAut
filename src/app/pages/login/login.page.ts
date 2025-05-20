import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Importa NavController para navegación
import { trigger, style, animate, transition } from '@angular/animations'; // Importa animaciones de Angular
import { AuthService } from 'src/app/services/auth.service'; // Importa AuthService para manejo de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  animations: [
    // Define la animación fadeIn para el formulario de login
    trigger('fadeIn', [
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ])
  ]
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  mostrarLogin: boolean = true;

  constructor(
    private authService: AuthService, // Inyecta AuthService para autenticación
    private navCtrl: NavController // Inyecta NavController para navegación
  ) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.mostrarLogin = false; // Oculta el login y activa la animación
      setTimeout(() => {
        this.navCtrl.navigateRoot('/tabs'); // Navega a tabs después de la animación
      }, 500); // Espera a que termine la animación (500ms)
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}