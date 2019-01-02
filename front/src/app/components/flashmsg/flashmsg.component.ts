import { Component, OnInit } from '@angular/core';
import { FlashmsgService } from '../../services/flashmsg.service';
import { Message } from '../../models/message.model.';

@Component({
  selector: 'app-flashmsg',
  templateUrl: './flashmsg.component.html',
  styleUrls: ['./flashmsg.component.css']
})
export class FlashmsgComponent implements OnInit {
  messages: Message[] = [];

  constructor(private flashmsg: FlashmsgService) { }

  ngOnInit() {
    this.flashmsg.message.subscribe(
      message => {
        this.messages = [message, ...this.messages];
      }
    );
  }

  onClose(index) {
    this.messages.splice(index, 1);
  }

}
