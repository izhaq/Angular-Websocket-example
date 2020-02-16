import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserJoinComponent } from './new-user-join/new-user-join.component';
import { MessagesBoardComponent } from './messages-board/messages-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserJoinComponent,
    MessagesBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
