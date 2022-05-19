import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommemtsComponent } from './components/commemts/commemts.component';
import { CommentComponent } from './components/comment/comment.component';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';

const routes:Route[]= [
  {
    path:'',component:MainLayoutsComponent,children:[
      {path:'',redirectTo:'users', pathMatch:'full'},
      {path:'users',component:UsersComponent,children:[]},
      {path:'posts',component:PostsComponent,children:[]},
      {path:'comments',component:CommemtsComponent,children:[]}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommemtsComponent,
    CommentComponent,
    MainLayoutsComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
