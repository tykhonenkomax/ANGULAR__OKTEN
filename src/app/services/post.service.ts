import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../modules";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }
}
