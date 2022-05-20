import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../interface";
import {PostsService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPosts[];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getAll().subscribe(value => this.posts=value)
  }

}
