import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";
import {IPost} from "../modules/IPost";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private userService:HttpClient) { }
  getUser(id:string):Observable<IPost>{
    return this.userService.get<IPost>(urls.posts + '/'+ id)
  }
}
