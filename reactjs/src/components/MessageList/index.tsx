import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import logoImg from '@assets/logo.svg';

import { api } from '@services/api';

import styles from './styles.module.scss';

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
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map(message => {
          return (
            <li key={message.id.replace(/\-/g, '_')} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
