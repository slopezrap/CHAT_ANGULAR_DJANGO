import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://' + '127.0.0.1:8000' + '/chat/lobby' + '/'

export interface MessageSend_from_Front {
	author: string,
	message_from_front: string
}

export interface MessageRecived_from_Back {
	message_from_back: string
}



@Injectable({
  providedIn: 'root',
})
export class ChatService {
	private MessageRecived_from_Back: Subject<MessageRecived_from_Back>;
	private subjectSend_from_Front: Subject<MessageSend_from_Front>;

	constructor(wsService: WebsocketService) {
		this.subjectSend_from_Front = <Subject<MessageSend_from_Front>>wsService
		.connect(CHAT_URL)
		.pipe(
			map((response: MessageEvent): MessageSend_from_Front => {
			let data = JSON.parse(response.data);
			return {
				author: data.author,
				message_from_front: data.message_from_front
			}
			})
		);

		this.MessageRecived_from_Back = <Subject<MessageRecived_from_Back>>wsService
		.connect(CHAT_URL)
		.pipe(
			map((response: MessageEvent): MessageRecived_from_Back => {
			let data = JSON.parse(response.data);
			return {
				message_from_back: data.message_from_back
			}
			})
		);
  	}
  
  send(msg: MessageSend_from_Front){
    this.subjectSend_from_Front.next(msg);
  }

  onMessageReceived(callback: (value: MessageRecived_from_Back) => void){
	console.log("Soy callback:" + callback)
    this.MessageRecived_from_Back.subscribe(callback);
  }
}