import {SocketMessage} from './socket-message';

export class ChatMessage extends SocketMessage {
  constructor(public sender = 'NA', public content: string) {
    super('chat');
  }
}
