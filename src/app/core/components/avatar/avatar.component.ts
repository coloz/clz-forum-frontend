import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  url;
  @Input() uid;
  @Input() size = "small"; //'big', 'middle', 'small'

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.uid !== 'undefined') {
      this.url = this.getUcenterAvatar()
    }
  }

  getAvatar() {
    let str = this.uid.toString();
    let uidStr = str;
    for (let index = 0; index < (9 - str.length); index++) {
      uidStr = '0' + uidStr;
    }
    let dir1 = uidStr.substr(0, 3);
    let dir2 = uidStr.substr(3, 2);
    let dir3 = uidStr.substr(5, 2);
    let last = uidStr.substr(-2);
    return `https://arduino.cn/uc_server/data/avatar/${dir1}/${dir2}/${dir3}/${last}_avatar_${this.size}.jpg`
  }

  getUcenterAvatar(){
    return `https://arduino.cn/uc_server/avatar.php?uid=${this.uid}&size=small`
  }

}
