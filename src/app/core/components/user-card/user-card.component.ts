import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DiscuzService } from '../../services/discuz.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() uid;

  info;

  constructor(
    private discuzService: DiscuzService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.uid != 'undefined')
      this.update()
  }

  update() {
    if (typeof this.uid != 'undefined')
      this.discuzService.getUser({ uid: this.uid }).subscribe(resp => {
        // console.log(resp);
          this.info = resp
      })
  }

}
