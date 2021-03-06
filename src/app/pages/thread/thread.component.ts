import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import { ViewService } from 'src/app/core/services/view.service';
import { SimplemdeComponent } from 'ngx-simplemde';
import { Datasource } from 'ngx-ui-scroll';
import { AuthService } from 'src/app/core/services/auth.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthComponent } from 'src/app/core/components/auth/auth.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  items = [];
  tid;

  threadInfo: {
    tid
    subject
    recommend_add
    favtimes
    dateline
    views
    replies
    author
    authorid
    total
  }

  favoriteAndLikeState = {
    favorite: false,
    like: false
  }

  inputValue = "";
  inputValue_render = "";


  pageIndex = 1;
  pageSize = 10;
  total;

  loading: boolean;

  datasource;

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
    private authService: AuthService,
    private modal: NzModalService,
    private message: NzMessageService
  ) { }

  @ViewChild('simplemde', { static: true }) private readonly simplemde: SimplemdeComponent;

  options = {
    toolbar: ['bold', 'italic', 'heading', '|', 'quote']
  };

  demo;

  isLoginSubscriber;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.discuzService.getThreadInfo(this.tid).subscribe(resp => {
        this.threadInfo = resp
        document.title = this.threadInfo.subject
        this.viewService.navList.push({ text: this.threadInfo.subject })
        this.datasource = new Datasource({
          get: (index, count) => this.getData(index, count),
          settings: {
            windowViewport: true,
            minIndex: 1,
            maxIndex: this.threadInfo.total + 1,
            startIndex: 1,
            bufferSize: 15,
          }
        })
      })
      this.isLoginSubscriber = this.authService.isLogin.subscribe(state => {
        if (state) {
          this.discuzService.getFavoriteAndLikeState(this.tid).subscribe((resp: any) => {
            this.favoriteAndLikeState = resp.detail
          })
        }
      })
    })
  }

  ngAfterViewInit(): void {
    this.viewService.scroll2Top()

    // this.simplemde.setOptions('lineNumbers', true);
  }

  ngOnDestroy(): void {
    this.viewService.navList.pop()
    this.isLoginSubscriber.unsubscribe()
  }

  addLike() {
    if (!this.authService.userInfo) {
      this.openAuthModel()
      return
    }
    this.discuzService.addLike(this.tid).subscribe((resp: any) => {
      this.favoriteAndLikeState.like = resp.detail.like
      if (resp.detail.like)
        this.threadInfo.recommend_add++;
      else
        this.threadInfo.recommend_add--;
    })

  }

  addFavorite() {
    if (!this.authService.userInfo) {
      this.openAuthModel()
      return
    }
    this.discuzService.addFavorite(this.tid).subscribe((resp: any) => {
      this.favoriteAndLikeState.favorite = resp.detail.favorite
      if (resp.detail.favorite)
        this.threadInfo.favtimes++;
      else
        this.threadInfo.favtimes--;
    })

  }

  getData(index, count) {
    let tid = this.tid;
    setTimeout(() => {
      this.datasource.adapter.check();
    }, 50)
    return this.discuzService.getThreadPosts({ tid, index, count })
  }

  inputMode = false;
  showInput() {
    if (!this.authService.userInfo) {
      this.openAuthModel()
      return
    }
    this.inputMode = true;
  }

  openAuthModel() {
    this.modal.create({
      nzContent: AuthComponent,
      nzFooter: null,
      nzClosable: false,
      nzWidth: '500px'
    })
  }

  publish() {
    console.log(this.inputValue);
    this.discuzService.publishPost(this.tid, { content: this.inputValue }).subscribe(async (resp: any) => {
      if (resp.code == 0) {
        console.log(resp.detail);

        this.inputMode = false;
        this.inputValue = '';
        this.message.success('发表成功')
        console.log(this.datasource);
        await this.datasource.adapter.relax();
        await this.datasource.adapter.append({ items: [resp.detail.post], eof: true });
        await this.datasource.adapter.fix({ scrollPosition: Infinity });
      }
    })
  }
}
