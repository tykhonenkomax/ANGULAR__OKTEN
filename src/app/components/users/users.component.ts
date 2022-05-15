import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services";
import {IUsers} from "../../modules";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUsers[];
  constructor(private userService:UsersService ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }

}
