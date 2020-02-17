import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserJoinComponent } from './chat-members/new-user-join/new-user-join.component';
import { MessagesBoardComponent } from './chat-room/messages-board/messages-board.component';
import { SendMessageComponent } from './chat-room/send-message/send-message.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatMembersComponent } from './chat-members/chat-members.component';
import { SearchMemberComponent } from './chat-members/search-member/search-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserJoinComponent,
    MessagesBoardComponent,
    SendMessageComponent,
    ChatRoomComponent,
    ChatMembersComponent,
    SearchMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
