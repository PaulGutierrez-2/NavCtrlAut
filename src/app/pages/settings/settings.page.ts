import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Importa NavController para navegación
import { AuthService } from 'src/app/services/auth.service'; // Importa AuthService para manejo de autenticación

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor(
    private navCtrl: NavController, // Inyecta NavController para navegación
    private authService: AuthService // Inyecta AuthService para autenticación
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs'); // Navega de regreso a tabs
  }
  logout() {
    this.authService.logout(); // Cierra sesión eliminando el token
    this.navCtrl.navigateRoot('/home'); // Navega a la página de inicio
  }
}
