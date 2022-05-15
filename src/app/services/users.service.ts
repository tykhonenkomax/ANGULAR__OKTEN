import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../modules";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IUsers[]>{
    return this.httpClient.get<IUsers[]>(urls.users)
  }

}
