import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages:string[];

  constructor(private postService: PostsService,
              private route: Router,
              private camera: Camera) {}

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

  camara(){

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      sourceType : this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):

     const img = window.Ionic.WebView.convertFileSrc(imageData);
     console.log(img);
     this.tempImages.push(img);

    }, (err) => {
     // Handle error
    });
  }

}
