import {Component, OnInit} from '@angular/core';
import {SocketsMessagesService} from './services/sockets-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chat-client';
  constructor(private socketsMessagesService: SocketsMessagesService) {
  }

  ngOnInit(): void {
    //this.socketsMessagesService.connect();
  }
}
