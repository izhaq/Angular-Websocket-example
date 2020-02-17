 import { Injectable } from '@angular/core';
 import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
 import {BehaviorSubject, Observable} from 'rxjs';
 import {ChatMessage} from '../models/chat-message';
 import {User} from "../models/user";
 import {UserLoginMessage} from "../models/user-login-message";

 const URL = 'ws://localhost:8999';

@Injectable({
  providedIn: 'root'
})
export class SocketsMessagesService {

  private socketConnection$: WebSocketSubject<ChatMessage | UserLoginMessage>;

  constructor() {
    this.connect();
  }

  connect() {
    this.socketConnection$ = webSocket(URL);

  }

  onMessageSent(msg: ChatMessage | UserLoginMessage) {
    this.socketConnection$.next(msg);
  }

  get messagesObservable(): Observable<ChatMessage | UserLoginMessage> {
    return this.socketConnection$.asObservable();
  }
}
