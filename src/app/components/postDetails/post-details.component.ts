import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services";
import {IPost} from "../../modules/IPost";




@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetail:IPost;

  constructor(private activatedRoute:ActivatedRoute,
              private postService:PostService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getAll(id).subscribe(value => this.postDetail=value )
    })
  }

}
