import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-join',
  templateUrl: './new-user-join.component.html',
  styleUrls: ['./new-user-join.component.scss']
})
export class NewUserJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNewUserLogin(event) {
    console.log(event);
  }

}
