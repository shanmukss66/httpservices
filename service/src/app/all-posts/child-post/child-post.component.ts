import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/app/models/modelstruct.model';

@Component({
  selector: 'app-child-post',
  templateUrl: './child-post.component.html',
  styleUrls: ['./child-post.component.css']
})
export class ChildPostComponent implements OnInit {
@Input() thisPost:post;
  constructor() { }

  ngOnInit(): void {
    console.log(this.thisPost);
    
  }

}
