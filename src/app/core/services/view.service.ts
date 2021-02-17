import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  userCard = new Subject();
  navList: {
    type: string,
    text: string,
    id: number
  }[] = []

  constructor() { }
}
