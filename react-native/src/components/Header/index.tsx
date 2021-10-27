import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Logo from '@assets/logo.svg';

import { Avatar } from '@components/Avatar';

import { Container, LogoutButton, LogoutButtonText, Row } from './styles';

type HeaderProps = {
  avatarUrl?: string;
  showLogoutButton?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Header({ avatarUrl, showLogoutButton, style }: HeaderProps) {
  return (
    <Container style={style}>
      <Logo />

      <Row>
        {showLogoutButton && (
          <LogoutButton activeOpacity={0.7}>
            <LogoutButtonText>Sair</LogoutButtonText>
          </LogoutButton>
        )}

        <Avatar avatarUrl={avatarUrl} />
      </Row>
    </Container>
  );
}
