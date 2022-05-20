import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interface";
import {PostsService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:IPost;

  constructor(private postsService:PostsService, private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      let state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;

      if (state){
        this.post = state;
      }else {
        this.postsService.getById(id).subscribe(value => this.post=value)
      }
    })
  }

}
