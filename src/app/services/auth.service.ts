import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  register(user:IUsers):Observable<IUsers>{
    return this.httpClient.post<IUsers>(urls.users, user)
  }
}
