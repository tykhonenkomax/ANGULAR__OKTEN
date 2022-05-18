import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../../interface/IUsers";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url ='https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient) { }
  getUsers():Observable<IUsers[]>{
    return this.httpClient.get<IUsers[]>(this._url)
  }
}
