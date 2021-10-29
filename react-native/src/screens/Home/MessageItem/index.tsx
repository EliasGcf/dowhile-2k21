import { Avatar } from '@components/Avatar';
import React from 'react';

import { Container, MessageText, UserInfo, UserName } from './styles';

type MessageItemProps = {
  data: {
    text: string;
    user: {
      avatar_url: string;
      name: string;
    };
  };
};

export function MessageItem({ data }: MessageItemProps) {
  return (
    <Container>
      <MessageText>{data.text}</MessageText>

      <UserInfo>
        <Avatar size="small" avatarUrl={data.user.avatar_url} />
        <UserName>{data.user.name}</UserName>
      </UserInfo>
    </Container>
  );
}
