import {Component, Input, OnInit} from '@angular/core';
import {IComments} from "../../modules";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:IComments;



  constructor() { }

  ngOnInit(): void {
  }

}
