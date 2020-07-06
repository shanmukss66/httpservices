import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule ,Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostingComponent } from './posting/posting.component';
import { ChildComponent } from './child/child.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ChildPostComponent } from './all-posts/child-post/child-post.component';

const appRoutes:Routes=[
{path:'posting',component:PostingComponent},
{path:'allposting',component:AllPostsComponent},
{path:'',redirectTo:'/allposting',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    PostingComponent,
    ChildComponent,
    AllPostsComponent,
    ChildPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
