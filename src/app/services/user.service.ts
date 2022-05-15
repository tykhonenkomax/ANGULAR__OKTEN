import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../modules/IUser";
import {urls} from "../urls";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService:HttpClient) { }
  getUser(id:number):Observable<IUser>{
    return this.userService.get<IUser>(urls.users + '/'+ id)
  }
}
