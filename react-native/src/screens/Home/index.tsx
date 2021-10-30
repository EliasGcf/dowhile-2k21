import React from 'react';

import { useAuth } from '@hooks/useAuth';

import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { SignInButton } from './SignInButton';

import { Container, HomeHeader, Main } from './styles';
import { AnimatePresence } from 'moti';

export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Main>
        <HomeHeader />

        <MessageList />
      </Main>

      <AnimatePresence exitBeforeEnter>
        {user ? <MessageForm key="MessageForm" /> : <SignInButton key="SignInButton" />}
      </AnimatePresence>
    </Container>
  );
}
