import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: Post[] =[];

  habilitadoIS = true;

  constructor(private postsService: PostsService) {}
  
  ngOnInit(){
  
    this.siguientes();

  }
  //refresher
  recargar(event?){
    this.habilitadoIS = true;
      this.posts = [];

    this.siguientes(event, true);

  }

  siguientes(event?, pull: boolean = false){

    this.postsService.getPosts(pull)
    .subscribe(resp =>{
      console.log(resp);
      this.posts.push(...resp.posts);
      
      if(event){
        event.target.complete();
        
        if(resp.posts.length === 0){
          this.habilitadoIS = false;
        }
      }
      

    });

  }

}

