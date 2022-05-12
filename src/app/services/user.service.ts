import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from '.././models/iUser'

@Injectable({
  providedIn: 'root'})
export class UserService {

  private url ='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }
getUsers():Observable<IUser[]>{
    return this
      .http
      .get<any[]>(this.url)
}

  getUser(id:number):Observable<IUser>{
    return this
      .http
      .get<any>(this.url + '/' +id)
  }


}
