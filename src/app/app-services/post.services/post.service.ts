import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../../interface/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url='https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(this._url)
  }
}
