from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = "lobby"
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message_from_front']
        print( 'recivo del websocket del front: %s' %message)
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message_to_group': message
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message_to_group']
        print( 'envio mensaje a los grupos: %s' %message)
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message_from_back': "BACK: mensaje_back: "+message
        }))