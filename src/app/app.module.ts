import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

import { CommentComponent } from './components/comment/comment.component';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {CommentsComponent} from "./components/comments/comments.component";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

const routes:Route[]= [
  {
    path:'',component:MainLayoutsComponent,children:[
      {path:'',redirectTo:'users', pathMatch:'full'},
      {
        path:'users',component:UsersComponent, children:
          [
            {
              path:':id', component:UserDetailsComponent
            }
          ]
      },
      {path:'posts',component:PostsComponent,children:
          [
            {path:':id',component:PostDetailsComponent}
          ]
      },
      {path:'comments',component:CommentsComponent,children:
          [
            {path:':id', component: CommentDetailsComponent}
          ]
      },
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
    CommentsComponent,
    CommentComponent,
    MainLayoutsComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent

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
