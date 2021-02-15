import { Component, OnInit } from '@angular/core';
import { DiscuzService } from 'src/app/core/services/discuz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = []

  constructor(
    private discuzService: DiscuzService
  ) { }

  ngOnInit(): void {
    this.discuzService.getThreadAll().subscribe(resp => {
      this.items = resp
    })
  }

}
