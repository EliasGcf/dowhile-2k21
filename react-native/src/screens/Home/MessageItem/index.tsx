import { Avatar } from '@components/Avatar';
import React from 'react';

import { Container, MessageText, UserInfo, UserName } from './styles';

type MessageItemProps = {
  text: string;
  user: {
    avatarUrl: string;
    name: string;
  };
};

export function MessageItem({ text, user }: MessageItemProps) {
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
