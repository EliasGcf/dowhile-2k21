import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Button } from '@components/Button';

import { Message } from './Message';

import { Container, HomeHeader, SignInButtonText } from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader showLogoutButton avatarUrl="https://github.com/eliasgcf.png" />

      <Message
        text="Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os
        tempos, vamooo pra cima! 🔥🔥"
        user={{ name: 'Elias Gabriel', avatarUrl: 'https://github.com/eliasgcf.png' }}
      />

      <Button activeOpacity={0.7} variant="secondary">
        <AntDesign name="github" size={24} />
        <SignInButtonText>Entrar com o GitHub</SignInButtonText>
      </Button>
    </Container>
  );
}
