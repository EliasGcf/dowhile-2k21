import { Avatar } from '@components/Avatar';
import React from 'react';

import { Container, MessageText, UserInfo, UserName } from './styles';

type MessageProps = {
  text: string;
  user: {
    avatarUrl: string;
    name: string;
  };
};

export function Message({ text, user }: MessageProps) {
  return (
    <Container>
      <MessageText>{text}</MessageText>

      <UserInfo>
        <Avatar size="small" avatarUrl={user.avatarUrl} />
        <UserName>{user.name}</UserName>
      </UserInfo>
    </Container>
  );
}
