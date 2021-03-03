import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';
import { ViewService } from 'src/app/core/services/view.service';
import { SimplemdeComponent } from 'ngx-simplemde';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  items = [];
  tid;

  subject;
  like;
  favtimes;
  views;

  inputValue = "";
  inputValue_render = "";


  pageIndex = 1;
  pageSize = 10;
  total;

  loading: boolean;

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
  ) { }

  @ViewChild('simplemde', { static: true }) private readonly simplemde: SimplemdeComponent;

  @ViewChildren('post') postElementList: QueryList<ElementRef>;

  options = {
    toolbar: ['bold', 'italic', 'heading', '|', 'quote']
  };

  demo;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.update().then(() => {
        this.viewService.userCard.next(this.items[0].authorid.toString())
      })
    })
  }

  ngAfterViewInit(): void {
    this.viewService.scroll2Top()
    
    // this.simplemde.setOptions('lineNumbers', true);
  }

  ngOnDestroy(): void {
    this.viewService.navList.pop()
  }

  async update() {
    return new Promise((resolve, reject) => {
      this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
        // console.log(resp);
        this.items = resp.data.list;
        this.total = resp.data.total;
        this.subject = resp.data.subject;
        this.like = resp.data.like;
        this.favtimes = resp.data.favtimes;
        this.views = resp.data.views;
        this.viewService.navList.push({
          type: 'thread',
          text: this.items[0].subject,
          id: this.tid
        })
        resolve(true)
      })
    })
  }


  // totalHeight = 0;
  // fetchMore(event: IPageInfo) {
  //   console.log(event.endIndex, this.items.length);
  //   if (event.endIndex == -1 || event.endIndex !== this.items.length - 1 || this.items.length >= this.total) return;
  //   this.pageIndex++;
  //   this.loading = true;
  //   this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
  //     // console.log(resp);
  //     this.items = this.items.concat(resp.data.list);
  //     this.total = resp.data.total;
  //     this.loading = false
  //   })
  // }

  // 重新计算高度
  // getTotalHeight() {
  //   setInterval(() => {
  //     let totalHeight_temp = 0;
  //     this.postElementList.forEach(ele => {
  //       totalHeight_temp += ele.nativeElement.clientHeight
  //     })
  //     this.totalHeight = totalHeight_temp
  //     // console.log(this.totalHeight);
  //   }, 2000)

  // }

  initEditor() {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      previewStyle: 'tab',
      height: '200px',
      initialValue: 'content',
      language: 'zh-CN'
    });
  }

  onScroll() {

  }

  inputMode = false;
  showInput() {
    this.inputMode = true;
  }
}
