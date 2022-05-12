import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../interface";
import {urls} from "../contants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) {}
  getAll():Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments)
  }
}
