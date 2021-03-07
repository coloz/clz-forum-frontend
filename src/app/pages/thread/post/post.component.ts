import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'thread-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() item;
  @Input() num;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.item != 'undefined') {
      this.processMessage()
    }
  }

  processMessage() {
    // https://www.bilibili.com/video/BV1tp4y1H7xc
    // <iframe src="//player.bilibili.com/player.html?aid=971963556&bvid=BV1tp4y1H7xc&cid=306734934&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    // http://player.bilibili.com/player.html?bvid=BV1tp4y1H7xc
    if (this.item.message.indexOf('bilibili.com/') > -1) {
      let reg = /https:\/\/www.bilibili.com\/video\/.{12}/g
      let result = this.item.message.match(reg)
      if (result == null) return
      for (let index = 0; index < result.length; index++) {
        const url = result[index];
        let bvid = url.substring(url.length - 12);
        let src = `<iframe src="//player.bilibili.com/player.html?bvid=${bvid}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`
        this.item.message = this.item.message.replace(url, src)
      }
    }
  }

}
