import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../app-services/user.services/user.service";
import { UserComponent } from './users-components/user/user.component';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import { PostComponent } from '../posts/posts-components/post/post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports: [
    PostComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
