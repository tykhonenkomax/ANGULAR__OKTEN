import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../../interface/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _url='https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient:HttpClient) {}
  getComments():Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(this._url)
  }
}
