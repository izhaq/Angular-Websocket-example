import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ChatMessage} from '../models/chat-message';
import {SocketsMessagesService} from "./sockets-messages.service";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {


  private readonly storeMessages: ChatMessage[] = [];
  private readonly storeMessages$: BehaviorSubject<ChatMessage[]> = new BehaviorSubject(this.storeMessages);
  private currentUser: string;
  private readonly currentUser$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private socketMessagesSrv: SocketsMessagesService) {
    this.init();
  }

  init() {
    this.socketMessagesSrv.messagesObservable.subscribe((msg: ChatMessage) => {
      this.addNewFriendMessage(msg);
    });
  }

  get storeMessagesObservable() {
    return this.storeMessages$.asObservable();
  }

  get userObservable() {
    return this.currentUser$.asObservable();
  }

  addNewFriendMessage(msg: ChatMessage) {
    if (msg.sender !== this.currentUser) {
      this.storeMessages.push(msg);
      this.storeMessages$.next(this.storeMessages);
    }
  }

  addNewSelfMessage(msg: string) {
    const chatMsg = new ChatMessage(this.currentUser, msg, true);
    this.storeMessages.push(chatMsg);
    this.storeMessages$.next(this.storeMessages);
    this.socketMessagesSrv.onMessageSent(chatMsg);
  }

  setCurrentUser(user: string) {
    this.currentUser = user;
    this.currentUser$.next(this.currentUser);
  }
}
