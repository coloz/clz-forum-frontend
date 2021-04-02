import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DiscuzService } from '../../services/discuz.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {

  inputValue?: string;

  title='';
  content='';
  tags = [];

  tagList=[]

  constructor(
    private discuzService:DiscuzService
  ) { }

  onChange(value: string): void {
    console.log(value);
  }

  ngOnInit(): void {
    this.discuzService.getTags(15).subscribe(resp => {
      console.log(resp);
      this.tagList = resp.map(item=>item.tagname);
    })
  }

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 8;
    return isLongTag ? `${tag.slice(0, 8)}...` : tag;
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
  }

  publish(){

  }
  
}