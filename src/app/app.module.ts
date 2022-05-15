import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {UserDetailsComponent} from "./components/userDetails/user-details.component";
import { PostDetailsComponent } from './components/postDetails/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomeComponent},
      {path: 'user-details', component: UsersComponent,
      children:
        [
        {path:'user-details/:id',component:UserDetailsComponent}
        ]
      },

      {path:'post-details',component:PostsComponent,
      children:
        [
          {path:'post-details/:id',component: PostDetailsComponent}
        ]
      },


        ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
