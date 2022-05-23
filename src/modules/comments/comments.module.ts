import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentsModule { }
