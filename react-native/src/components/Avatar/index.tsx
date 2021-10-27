import React from 'react';

import AvatarPng from '@assets/images/avatar/avatar.png';
import { theme } from 'stitches.config';

import { AvatarGradient, AvatarImg, AvatarBorder } from './styles';

type AvatarProps = {
  avatarUrl?: string;
  size?: 'small' | 'normal';
};

export function Avatar({ avatarUrl, size }: AvatarProps) {
  return (
    <AvatarGradient
      start={[0, 0]}
      end={[1, 0]}
      colors={[theme.colors.pink, theme.colors.yellow]}
      size={size}
    >
      <AvatarBorder>
        <AvatarImg size={size} source={avatarUrl ? { uri: avatarUrl } : AvatarPng} />
      </AvatarBorder>
    </AvatarGradient>
  );
}
