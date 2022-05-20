import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services";
import {IUser} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

user:IUser;

  constructor(private usersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      let state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

      if (state){
        this.user = state;
      } else {
        this.usersService.getById(id).subscribe(value => this.user =value )
      }

    })

  }

}
