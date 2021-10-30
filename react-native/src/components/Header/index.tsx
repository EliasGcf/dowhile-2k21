import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AnimatePresence, MotiView } from 'moti';

import Logo from '@assets/logo.svg';

import { useAuth } from '@hooks/useAuth';
import { Avatar } from '@components/Avatar';

import { Container, LogoutButton, LogoutButtonText, Row } from './styles';

type HeaderProps = {
  style?: StyleProp<ViewStyle>;
};

export function Header({ style }: HeaderProps) {
  const { user, signOut } = useAuth();

  return (
    <Container style={style}>
      <Logo />

      <Row>
        <AnimatePresence>
          {user && (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LogoutButton onPress={signOut} activeOpacity={0.7}>
                <LogoutButtonText>Sair</LogoutButtonText>
              </LogoutButton>
            </MotiView>
          )}
        </AnimatePresence>

        <Avatar avatarUrl={user?.avatar_url} />
      </Row>
    </Container>
  );
}
