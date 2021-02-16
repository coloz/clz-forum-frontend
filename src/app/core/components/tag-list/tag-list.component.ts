import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscuzService } from '../../services/discuz.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  items = [];
  items2 = [];
  constructor(
    private discuzService: DiscuzService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.discuzService.getTags(15).subscribe(resp => {
      // console.log(resp);
      // this.items = resp;
    })
    this.discuzService.getCategorys(20).subscribe(resp => {
      // console.log(resp);
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        if (element.fid == 2) {
          resp.push(resp.splice(index, 1)[0])
        }
      }
      this.items2 = resp

    })
  }

  goto(item) {
    this.router.navigate(['/'], { queryParams: { cat: item.fid } })
  }

}
