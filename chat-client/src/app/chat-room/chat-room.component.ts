import { Component, OnInit } from '@angular/core';
import {AppStoreService} from "../services/app-store.service";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  constructor(private storeMessagesSrv: AppStoreService) { }

  ngOnInit(): void {
  }

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
