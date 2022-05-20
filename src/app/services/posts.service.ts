import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../interface";
import {urls} from "../urls";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(urls.posts)
  }

  getById(id:string):Observable<IPosts>{
    return this.http.get<IPosts>(urls.posts+'/'+'id')
  }
}
