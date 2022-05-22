import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../interface";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(urls.users)
  }

  getById(id:string):Observable<IUsers>{
    return this.http.get<IUsers>(`${urls.users}/${id}`)
  }
}
