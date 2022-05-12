import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];

  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    this.userServices.getAll().subscribe(value =>this.users=value)
  }

}
