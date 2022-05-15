import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../modules";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input()
  post:IPosts;

  constructor() { }



  ngOnInit(): void {
  }

}
