import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ChatMessage} from '../models/chat-message';
import {SocketsMessagesService} from './sockets-messages.service';
import {UserLoginMessage} from '../models/user-login-message';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {


  private readonly messagesStore: ChatMessage[] = [];
  private readonly messagesStore$: BehaviorSubject<ChatMessage[]> = new BehaviorSubject(this.messagesStore);
  private currentUser: string;
  private readonly currentUser$: BehaviorSubject<string> = new BehaviorSubject('');
  private readonly membersStore: User[] = [];
  private readonly membersStore$: BehaviorSubject<User[]> = new BehaviorSubject(this.membersStore);

  constructor(private socketMessagesSrv: SocketsMessagesService) {
    this.init();
  }

  init() {
    this.socketMessagesSrv.messagesObservable.subscribe((msg: ChatMessage| UserLoginMessage) => {
      /*if (msg instanceof ChatMessage) {
        this.addNewFriendMessage(msg);
      } else {
        this.addNewMember(msg);
      }*/
      this.addNewFriendMessage(msg as ChatMessage);
    });
  }

  get storeMessagesObservable() {
    return this.messagesStore$.asObservable();
  }

  get userObservable() {
    return this.currentUser$.asObservable();
  }

  addNewMember(msg: UserLoginMessage) {
    const member = new User(msg.userName);
    this.membersStore.push(member);
    this.membersStore$.next(this.membersStore);
  }

  addNewFriendMessage(msg: ChatMessage) {
    if (msg.sender !== this.currentUser) {
      this.messagesStore.push(msg);
      this.messagesStore$.next(this.messagesStore);
    }
  }

  addNewSelfMessage(msg: string) {
    if (this.currentUser) {
      const chatMsg = new ChatMessage(this.currentUser, msg);
      this.messagesStore.push(chatMsg);
      this.messagesStore$.next(this.messagesStore);
      this.socketMessagesSrv.onMessageSent(chatMsg);
    }
  }

  setCurrentUser(user: string) {
    this.currentUser = user;
    this.currentUser$.next(this.currentUser);
    this.socketMessagesSrv.onMessageSent(new UserLoginMessage(user));
  }
}
