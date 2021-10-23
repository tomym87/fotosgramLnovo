import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Post } from '../interfaces/interfaces';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;


  constructor(private http: HttpClient,
              private storage: Storage) { }

  login(email: string, password: string){

    const data = {email, password};
//console.log(data);

    this.http.post<Post>(`${URL}/user/login`, data)
    .subscribe(resp =>{
      console.log(data);
      
      console.log(resp);
      
    });
  }
}
