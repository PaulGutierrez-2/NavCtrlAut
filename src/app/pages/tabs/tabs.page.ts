import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Importa NavController para navegación

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor(private navCtrl: NavController) { } // Inyecta NavController para navegación

  ngOnInit() {
  }

  // Navega a la página de configuración
  openSettings() {
    this.navCtrl.navigateForward('/settings');
  }
}
