import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @ViewChild('slidePrincipal') slides: IonSlides;





loginUser={
  email: 'vgarcia@valtic.com.mx',
  password: '1234567890'
};
registerUser: Usuario={
  email: 'test@mail.com',
  password:'123456',
  nombre: 'Test',
  avatar: 'av-1-png'
};



constructor( private usuarioService: UsuarioService,
            private navCtrl : NavController,
            private uiService: UiServiceService) {}

ngOnInit(){
  //this.slides.lockSwipes(true);
  console.log("mensaje de prueba oninit");
  
}
ngAfterViewInit(){
  this.slides.lockSwipes(true);
}
  async login(fLogin: NgForm){
    if(fLogin.invalid){return;}
    //console.log(fLogin.valid);

   const valido =  await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    //console.log(this.usuarioService.login(this.loginUser.email, this.loginUser.password));
    
    if(valido){
      //navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    }else{
    //mostrar alerta de usuario
       this.uiService.alertaInformativa('Usuario y contraseña no son correctos');
    }
    
  }

  async registro(fRegistro: NgForm){

    if(fRegistro.invalid){return;}
    const valido = await this.usuarioService.registro(this.registerUser);

    if(valido){
      //navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    }else{
    //mostrar alerta de usuario
       this.uiService.alertaInformativa('El correo electronico ingresado ya existe');
    }


  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }


}
