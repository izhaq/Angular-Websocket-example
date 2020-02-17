 import { Injectable } from '@angular/core';
 import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
 import {BehaviorSubject, Observable} from 'rxjs';
 import {ChatMessage} from '../models/chat-message';

 const URL = 'ws://localhost:8999';

@Injectable({
  providedIn: 'root'
})
export class SocketsMessagesService {

  private socketConnection$: WebSocketSubject<ChatMessage>;

  constructor() {
    this.connect();
    //this.onMessageReceived();
  }

  connect() {
    this.socketConnection$ = webSocket(URL);
    //this.storeMessages$ = new BehaviorSubject(this.storeMessages);

  }

  onMessageReceived() {
    console.log('Angular App : connected');
    this.socketConnection$.subscribe( (msg: ChatMessage) => {
      //this.appStoreSrv.addNewMessage(msg);
/*      this.storeMessages.push(msg);
      this.storeMessages$.next(this.storeMessages);*/
    });
  }

  onMessageSent(msg: ChatMessage) {
    this.socketConnection$.next(msg);
  }

  get messagesObservable(): Observable<ChatMessage> {
    return this.socketConnection$.asObservable();
  }
}
