import {Injectable} from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { post } from '../models/modelstruct.model';

@Injectable({
    providedIn:'root'
})
export class PostService {
    postdata;
    userId:number;
    Id:number;
    title:string;
    body:string;
    constructor(private http:HttpClient){
   
        
    }

    getPosts(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
    getPhotos(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/photos?albumId="+1+"&id=1");
    }

    getPostwPost(){
       this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {userId:'1',title:'hello'}).subscribe(data => {
            this.postdata=data.id;
            return this.postdata;
        })
        
    }
}

