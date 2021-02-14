import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.scss']
})
export class RecommenderComponent implements OnInit {
  items = [, , , , , , ,]
  constructor() { }

  ngOnInit(): void {
  }

}
