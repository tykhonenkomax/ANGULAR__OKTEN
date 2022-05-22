import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../interfaces/IComments";
import {urls} from "../../../contants/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<IComments[]>{
    return this.http.get<IComments[]>(`${urls.comments}`)
  }
  getById(id:string):Observable<IComments>{
    return this.http.get<IComments>(`${urls.comments}/${id}`)
  }
}
