import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../modules";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getAll(id:string):Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(urls.posts)
  }
}
