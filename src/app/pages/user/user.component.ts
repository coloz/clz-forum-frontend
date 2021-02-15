import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  uid;

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.uid = params.tid
      this.update()
    })
  }


  update() {
    this.discuzService.getUser(this.uid)
  }

}
