import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-user-join',
  templateUrl: './new-user-join.component.html',
  styleUrls: ['./new-user-join.component.scss']
})
export class NewUserJoinComponent implements OnInit {

  @Input() currentUser: string;
  @Output() newUserLogin = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNewUserLogin(event) {
    this.newUserLogin.emit(event.currentTarget.value);
  }

}
