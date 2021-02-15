import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Prism from 'prismjs';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  items = [];
  tid;
  inputValue = "";
  inputValue_render = "";
  options = {
    initialValue: `# Title of Project`,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: 'auto',
    minHeight: '500px'
  }


  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.discuzService.getThread(this.tid).subscribe(resp => {
        console.log(resp);
        this.items = resp
      })
    })
  }

  render() {
    let html = Prism.highlight(this.inputValue, Prism.languages.markdown, 'markdown');
  }

}
