import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message.model.';

@Injectable({
  providedIn: 'root'
})
export class FlashmsgService {
  message: Subject<Message> = new Subject<Message>();

  constructor() { }

  add(msg: string, type: string) {
    this.message.next({
      type: type,
      text: msg
    });
  }

  reset() {
    this.message.next();
  }
}
