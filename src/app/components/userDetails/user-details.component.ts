import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../modules/IUser";




@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails:IUser;


  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUser(id).subscribe(value => this.userDetails=value)
    })
  }

}
