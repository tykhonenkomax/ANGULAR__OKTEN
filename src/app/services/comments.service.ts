import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../modules";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(urls.comments)
  }
}
