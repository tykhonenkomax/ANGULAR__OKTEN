import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../interface";
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users:IUsers[];

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users=value)
  }

}
