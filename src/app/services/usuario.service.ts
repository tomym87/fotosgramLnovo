import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Post, Usuario, respu } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario = {};

  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl:NavController
              ) { }

  login(email: string, password: string){

    const data = {email, password};
//console.log(data);
    return new Promise(resolve =>{

      this.http.post<Post>(`${URL}/user/login`, data)
      .subscribe((resp)=>{
        //console.log(data);
        console.log(resp);
        
        if(resp['ok']){
          this.guardarToken(resp['token']);
          resolve(true);
        }else{
          console.log("Borrando token");
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
        
      });
    });

  }

  registro(usuario: Usuario){

    return new Promise(resolve =>{
      this.http.post<Post>(`${URL}/user/create`, usuario)
      .subscribe((resp)=>{
        //console.log(data);
        console.log(resp);
        if(resp['ok']){
          this.guardarToken(resp['token']);
          resolve(true);
        }else{
          console.log("Borrando token");
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    })

  }
//retornar si usuario exista
getUsuario(){
  console.log('se ejecuto getUsuario');
  if(!this.usuario._id){
    this.validaToken();
  }
  return{...this.usuario}
}

  async guardarToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
    console.log("guardado token");
    
  }

  async cargarToken(){
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean>{

    await this.cargarToken(); 
    if(!this.token){
      console.log('No tokem te regreso al login');
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }
    console.log('entrando a la promesa');
    
    return new Promise<boolean>(resolve=>{
      const headers = new HttpHeaders({
        'x-token': this.token
      });
      this.http.get(`${URL}/user`, {headers})
        .subscribe(resp =>{
          if(resp['ok']){
            this.usuario = resp['usuario']
            console.log('usuario existe');
            
            resolve(true);
        }else{
          console.log('token no coincide');
          
          resolve(false);
        }

    });
  });

  }
  actualizarUsuario(usuario: Usuario){

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise(resolve=>{

      this.http.post(`${URL}/user/update`, usuario, {headers})
        .subscribe(resp =>{
          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve(true)
          }else{
            console.log('no funciono actualiza usuario');
            resolve(false);
            
          }
        });
    });

  }
}
