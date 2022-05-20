import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../interface";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IComments[]>{
    return this.http.get<IComments[]>(urls.comments)
  }
  getById(id:string):Observable<IComments>{
    return this.http.get<IComments>(urls.comments+'/'+'id')
  }
}
