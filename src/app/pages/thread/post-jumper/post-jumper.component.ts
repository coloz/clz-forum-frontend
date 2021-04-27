import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-jumper',
  templateUrl: './post-jumper.component.html',
  styleUrls: ['./post-jumper.component.scss']
})
export class PostJumperComponent implements OnInit {

  @Input() postNum: number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
