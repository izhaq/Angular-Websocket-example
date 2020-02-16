 import { Injectable } from '@angular/core';
 import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
 import {BehaviorSubject, Observable} from 'rxjs';
 import {ChatMessage} from '../models/chat-message';

 const URL = 'ws://localhost:9000';

@Injectable({
  providedIn: 'root'
})
export class SocketsMessagesService {

  //myWebSocket: WebSocketSubject<ChatMessage> = webSocket('ws://localhost:8000');
  private socketConnection$: WebSocketSubject<ChatMessage>;
  private storeMessags$: BehaviorSubject<ChatMessage[]>;
  private storeMessags: ChatMessage[] = [];
  RETRY_SECONDS = 10;

  constructor() {
    this.init();
  }

  init() {
    this.socketConnection$ = webSocket(URL);
    this.storeMessags$ = new BehaviorSubject(this.storeMessags);
    //this.connect();
  }

  connect() {
    console.log('Angular App : connected');
    this.socketConnection$.asObservable().subscribe( (msgs: ChatMessage) => console.log(msgs));
    //this.ChatMessage
  }
}
