import { Component, OnInit } from '@angular/core';
import { ChatService, MessageSend_from_Front, MessageRecived_from_Back } from 'src/app/services/chat.service'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent implements OnInit {
	//------------------------------------------------------------------------------
	//------------------------------------------------------------------------------
	private message_from_Front: MessageSend_from_Front = {
		author: "",
		message_from_front: ""  
	 }
  
	message_to_front: MessageRecived_from_Back[] = [];

	selectedFile: File = null;
	dot = '.';
	standChunk = 1024 * 1024 * 10;
	//------------------------------------------------------------------------------
	//------------------------------------------------------------------------------
	constructor(private chatService: ChatService) {
		chatService.onMessageReceived((msg: MessageRecived_from_Back) => {
		console.log("Constructor Chat Component: " + msg.message_from_back)
      this.message_to_front.push(msg);
		});
	}
	onSubmit() {
		console.log(this.message_from_Front.author);  // { first: '', last: '' }
		console.log(this.message_from_Front.message_from_front);  // false
	  }

 	ngOnInit() {}

	//------------------------------------------------------------------------------
	//------------------------------------------------------------------------------
	sendMsg() {
		var data = {
			author: this.message_from_Front.author,
			message_from_front: this.message_from_Front.message_from_front
		}
		this.chatService.send(data);
  	}

	  
	//------------------------------------------------------------------------------
	//------------------------------------------------------------------------------
	onFileChanged = (event) => {
		this.selectedFile = event.target.files[0];
	  }

	onUpload(){

		var sizeFile = this.selectedFile.size;
		var filename = this.selectedFile.name;
		var filenameSinExtension = filename.substring(0, filename.lastIndexOf('.'));
		var filenameExtension = filename.split(this.dot).pop();
		var filenameExtensionDot = this.dot + filename.split(this.dot).pop();
		console.log(sizeFile)
		console.log(filename)
		console.log(filenameSinExtension)
		console.log(filenameExtension)
		console.log(filenameExtensionDot)
		var fileReader = new FileReader();
		if (fileReader && this.selectedFile) {
			fileReader.readAsArrayBuffer(this.selectedFile);
		}
	//------------------------------------------------------------------------------
	//------------------------------------------------------------------------------
	}  


}