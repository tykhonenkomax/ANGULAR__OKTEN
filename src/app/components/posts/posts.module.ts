import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {UsersModule} from "../users/users.module";



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    UsersModule
  ]
})
export class PostsModule { }
