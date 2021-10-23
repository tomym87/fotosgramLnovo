import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @ViewChild('slidePrincipal') slides: IonSlides;



  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    }
];

loginUser={
  email: 'vgarcia@valtic.com.mx',
  password: '1234567890'
};

avatarSlide={
  slidesPerView:3.5
};
constructor( private usuarioService: UsuarioService ) {}

ngOnInit(){
  //this.slides.lockSwipes(true);
  console.log("mensaje de prueba oninit");
  
}
ngAfterViewInit(){
  this.slides.lockSwipes(true);
}
  login(fLogin: NgForm){
    if(fLogin.invalid){return;}
    //console.log(fLogin.valid);

    this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    //console.log(this.usuarioService.login(this.loginUser.email, this.loginUser.password));
    
    
    
  }

  registro(fRegistro: NgForm){
    console.log(fRegistro.valid);

  }

  seleccionarAvatar(avatar){
    this.avatars.forEach(av => av.seleccionado= false);

    avatar.seleccionado= true;
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
