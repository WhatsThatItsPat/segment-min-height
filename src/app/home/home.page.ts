import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private toastController: ToastController
  ) {}

  async clickedTheWrongThing() {
    console.log('clicked the wrong thing');

    const toast = await this.toastController.create({
      message: 'Oops, you clicked on the card above the segment component.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();

  }

}
