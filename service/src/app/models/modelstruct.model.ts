import { Url } from 'url';

export interface post {
    userId:string;
    Id:string;
    title:string;
    body:string;
}

export interface photos {
    albumId:number;
    id:number;
    title:string;
    url:URL;
    thumbnailUrl:URL;
}