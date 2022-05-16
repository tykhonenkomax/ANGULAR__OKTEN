import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../modules";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(urls.posts)
  }
}
