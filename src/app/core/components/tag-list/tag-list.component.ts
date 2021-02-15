import { Component, OnInit } from '@angular/core';
import { DiscuzService } from '../../services/discuz.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  items = [];

  constructor(
    private discuzService: DiscuzService
  ) { }

  ngOnInit(): void {
    this.discuzService.getTags().subscribe(resp => {
      console.log(resp);
      
      this.items = resp
    })
  }

}
