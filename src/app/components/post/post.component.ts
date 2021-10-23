import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  img1 = '../../../assets/perro-1.jpg';
  img2 = '../../../assets/perro2.jpg';
  img3 = '../../assets/perro3.jpg';

  constructor() { }

  ngOnInit() {}

}
