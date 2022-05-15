import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services";
import {IPosts} from "../../modules";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPosts[];
  constructor(private postService:PostService ) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts=value)
  }

}
