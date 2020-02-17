import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  @Output() newMessage = new EventEmitter<string>();
  msgContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendNewMessage() {
    if (this.msgContent) {
      this.newMessage.emit(this.msgContent);
      this.msgContent = '';
    }
  }
}
