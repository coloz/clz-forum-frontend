import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscuzService {

  constructor(
    private http: HttpClient
  ) { }


  getThreadAll(): any {
    return this.http.get('api/thread/all?pageIndex=1&pageSize=10')
  }

  getThread(tid): any {
    return this.http.get(`api/thread/${tid}?pageIndex=1&pageSize=10`)
  }

}
