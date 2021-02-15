import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscuzService {

  constructor(
    private http: HttpClient
  ) { }


  getThreadAll({ pageIndex, pageSize }): any {
    return this.http.get(`api/thread/all?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }

  getThread({ tid, pageIndex, pageSize }): any {
    return this.http.get(`api/thread/${tid}?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }

}
