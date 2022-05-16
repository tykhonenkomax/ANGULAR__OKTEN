import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../modules";
import {urls} from "../urls";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private commentServices:HttpClient) { }
  getComment(id:string):Observable<IComment>{
    return this.commentServices.get<IComment>(urls.comments+'/'+id)
  }


  }


