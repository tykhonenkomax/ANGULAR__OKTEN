import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes:Routes =[
  {path:'',component:MainLayoutsComponent, children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'cars',component:CarsComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
exports:[
  RouterModule
]


})
export class AppRoutingModule { }
