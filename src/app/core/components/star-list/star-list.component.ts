import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.scss']
})
export class StarListComponent implements OnInit {
  items = [, , , , , , ,]
  constructor() { }

  ngOnInit(): void {
  }

}
