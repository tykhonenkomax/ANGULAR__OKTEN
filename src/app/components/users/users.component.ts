import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: any[];

  constructor(private httpClient: HttpClient) {
  }


getUsers():void{
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users=response);
}
ngOnInit():void {
    this.getUsers();
}
}
