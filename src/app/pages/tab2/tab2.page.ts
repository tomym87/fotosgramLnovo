import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages:string[];

  constructor(private postService: PostsService,
              private route: Router) {}

post={
  mensaje:'',
  coords: null,
  posicion:false,
  fecha: new Date(),
  area: '',
  urgencia:''

}

  async crearPost(){
    console.log(this.post);
    const creado = await this.postService.crearPost(this.post);

    this.post={
      mensaje:'',
      coords: null,
      posicion:false,
      fecha: new Date(),
      area: '',
      urgencia:''
    };
    this.route.navigateByUrl('/main/tabs/tab1');
  }

  getGeo(){


    console.log(this.post.posicion);
    this.post.coords= this.post.posicion;
  }

}
