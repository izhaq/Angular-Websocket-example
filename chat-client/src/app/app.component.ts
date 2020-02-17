import {Component, OnInit} from '@angular/core';
import {SocketsMessagesService} from './services/sockets-messages.service';
import {AppStoreService} from "./services/app-store.service";
import {ChatMessage} from "./models/chat-message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chat-client';
  constructor(private storeMessagesSrv: AppStoreService) {
  }

  ngOnInit(): void {}

  get messages() {
    return this.storeMessagesSrv.storeMessagesObservable;
  }

  get currentUser() {
    return this.storeMessagesSrv.userObservable;
  }

  onNewMessage(msg) {
    this.storeMessagesSrv.addNewSelfMessage(msg);
  }

  onUserLogin(user) {
    this.storeMessagesSrv.setCurrentUser(user);
  }
}
