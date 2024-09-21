import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  contra: string;

  constructor(private ToastController: ToastController) {
    this.user = 'Usuario1';
    this.contra = 'MiClav3';
  }

  ngOnInit() {
  }

  async login() {
    if (this.user === 'Usuario1' && this.contra === 'MiClav3') {
      const toast = await this.ToastController.create({
        message: 'Bienvenido',
        position: 'middle',
        duration: 2000
      });
      toast.present();
    } else {
      const toast = await this.ToastController.create({
        message: 'Usuario o contraseña incorrectos',
        position: 'middle',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
