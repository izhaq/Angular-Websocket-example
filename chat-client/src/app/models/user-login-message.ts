import {SocketMessage} from './socket-message';

export class UserLoginMessage extends SocketMessage {
  constructor(public userName: string) {
    super('login');
  }
}
