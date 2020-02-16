export class ChatMessage {
  constructor(
    public sender: string,
    public content: string,
    public isBroadcast = false,
  ) { }
}
