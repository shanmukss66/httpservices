import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { post, photos } from '../models/modelstruct.model';

import { title } from 'process';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
   
  constructor(private postservice:PostService) { }
  posts:post [] = [];
  phot: photos [] = [];

  goout;
 
  ngOnInit(): void {
    this.getPost();
    this.getphoto();
    this.post_posts();
  }


getPost(){
  this.postservice.getPosts().subscribe((data: post[]) => {
        this.posts=data;
        this.goout=this.posts;
        console.log(this.posts);
  });
}
getphoto(){
  this.postservice.getPhotos().subscribe((data: photos[]) => {
        this.phot=data;
        
        console.log(this.phot);
  });
}

post_posts(){
  console.log(this.postservice.getPostwPost());
}
 
}
