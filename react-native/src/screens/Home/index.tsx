import React from 'react';

import { useAuth } from '@hooks/useAuth';

import { Message } from './Message';
import { MessageForm } from './MessageForm';
import { SignInButton } from './SignInButton';

import { Container, HomeHeader } from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <HomeHeader />

      <Message
        text="Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os
        tempos, vamooo pra cima! 🔥🔥"
        user={{ name: 'Elias Gabriel', avatarUrl: 'https://github.com/eliasgcf.png' }}
      />

      {user ? <MessageForm /> : <SignInButton />}
    </Container>
  );
}
