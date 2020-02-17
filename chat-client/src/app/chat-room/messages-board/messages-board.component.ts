import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../../models/chat-message';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.scss']
})
export class MessagesBoardComponent implements OnInit {

  @Input() messages: ChatMessage[];
  @Input() currentUser: string;

  constructor() { }

  ngOnInit(): void {
  }

}
