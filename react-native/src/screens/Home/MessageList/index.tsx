import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
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
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 128 }}
        data={messages}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        keyExtractor={message => message.id}
        renderItem={({ item: message }) => (
          <MessageItem
            text={message.text}
            user={{ name: message.user.name, avatarUrl: message.user.avatar_url }}
          />
        )}
      />
    </Container>
  );
}
