import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatCompComponent } from './components/chat-comp/chat-comp.component';

import { WebsocketService } from './services/websocket.service'
import { ChatService } from './services/chat.service'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatCompComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebsocketService,
    ChatService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
