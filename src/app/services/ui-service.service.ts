import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController,
              private toastController:ToastController ) { 
  }

  async alertaInformativa(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message,
      buttons: ['OK']
    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }
  async presentToast(message:string, color:string) {
    const toast = await this.toastController.create({
      position:'top',
      message,
      animated:true,
      color,
      duration: 1700
    });
    toast.present();
  }
}
