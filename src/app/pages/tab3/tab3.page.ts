import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

usuario: Usuario ={};

constructor(private usuarioService: UsuarioService,
            private uiService: UiServiceService) {}

ngOnInit(){
  this.usuario = this.usuarioService.getUsuario();
  console.log(this.usuario);
  
}

async actualizar(fActualizar:NgForm){
  if(fActualizar.invalid){return;}

  const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);
  console.log('actualizado');
  
  if(actualizado){
    //toast con mensaje actualizado
    this.uiService.presentToast('Registro Actualizado', "secondary")
  }else{
    //toast con error
    this.uiService.presentToast('No se pudo actualizar', "warning")
  }
}

logout(){}

}
