import React from 'react';

import { useAuth } from '@hooks/useAuth';

import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { SignInButton } from './SignInButton';

import { Container, HomeHeader, Main } from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Main>
        <HomeHeader />

        <MessageList />
      </Main>

      {user ? <MessageForm /> : <SignInButton />}
    </Container>
  );
}
