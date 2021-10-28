import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {

  constructor(private usuarioServise:UsuarioService){}
  
  canLoad() :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    console.log('guard funcionando');
    
    return this.usuarioServise.validaToken();
  }

 
  
}
