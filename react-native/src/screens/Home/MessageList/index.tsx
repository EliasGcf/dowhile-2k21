import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { MotiScrollView } from 'moti';
import io from 'socket.io-client';

import { api } from '@services/api';
import { MessageItem } from '@screens/Home/MessageItem';

import { Container } from './styles';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const socket = io('http://localhost:4000');

const messagesQueue: Message[] = [];

socket.on('new_message', (message: Message) => {
  messagesQueue.push(message);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    api.get<Message[]>('/messages/last3').then(response => {
      setMessages(response.data);
    });
  }, []);

  return (
    <Container>
      <MotiScrollView
        contentContainerStyle={{ paddingTop: 128 }}
        from={{ translateX: 500, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        {messages.map(message => (
          <View key={message.id}>
            <MessageItem data={message} />
            <View style={{ height: 32 }} />
          </View>
        ))}
      </MotiScrollView>
    </Container>
  );
}
