import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

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
        {user && (
          <LogoutButton onPress={signOut} activeOpacity={0.7}>
            <LogoutButtonText>Sair</LogoutButtonText>
          </LogoutButton>
        )}

        <Avatar avatarUrl={user?.avatar_url} />
      </Row>
    </Container>
  );
}
