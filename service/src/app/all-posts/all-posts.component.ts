import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { post } from '../models/modelstruct.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts: post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadAllPost();
  }

  loadAllPost(): void {
    this.postService.getPosts().subscribe((data:post[])=>{
      this.allPosts=data;
      console.log(data);
      
    })
  }
}
