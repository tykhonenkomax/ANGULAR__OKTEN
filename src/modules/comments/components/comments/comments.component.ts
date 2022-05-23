import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services";
import {IComments} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:IComments[];
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments=value )
  }

}
