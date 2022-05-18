import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app-components/home/home.component";


let routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'users',loadChildren:()=>import('./components/users/users.module').then(m=>m.UsersModule)},
  {path:'posts',loadChildren:()=>import('./components/posts/posts.module').then(n=>n.PostsModule)},
  {path:'comments',loadChildren:()=>import('./components/comments/comments.module').then(c=>c.CommentsModule)},
  {path:'about',loadChildren:()=>import('./components/about/about.module').then(a=>a.AboutModule)}

]

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
