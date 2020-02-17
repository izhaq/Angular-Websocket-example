import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatMembersComponent} from './chat-members/chat-members.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';


const routes: Routes =  [
  { path: 'members', component: ChatMembersComponent },
  { path: 'chat',      component: ChatRoomComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' },
  { path: '**', component: ChatMembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
