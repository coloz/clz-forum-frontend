import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  items = [];
  tid;
  
  inputMode = false;

  threadInfo: {
    tid
    subject
    recommend_add
    favtimes
    dateline
    views
    replies
    author
    authorid
    total
  }

  favoriteAndLikeState = {
    favorite: false,
    like: false
  }

  inputValue = "";
  inputValue_render = "";


  pageIndex = 1;
  pageSize = 10;
  total;

  loading: boolean;

  datasource;

  constructor() { }

  ngOnInit(): void {
  }

}
