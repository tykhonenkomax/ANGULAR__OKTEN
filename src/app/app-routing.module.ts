import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UsersComponent} from "../modules/users/components/users/users.component";
import {PostsModule, UsersModule} from "../modules";

const routes:Routes =[
  {
    path:'',component:MainLayoutComponent, children:[
      {path:'',redirectTo:'users',pathMatch:'full'},
      {path:'users',loadChildren:()=>import('./app.module').then(value => UsersModule)},
      {path:'posts',loadChildren:()=>import('.././modules/posts/posts.module').then(value => PostsModule )},
      {path:'comments',loadChildren:()=>import('.././modules/comments/comments.module').then(value => CommonModule)}
    ]

  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
