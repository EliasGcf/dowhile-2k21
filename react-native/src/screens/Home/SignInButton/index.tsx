import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { useAuth } from '@hooks/useAuth';
import { Button } from '@components/Button';

import { SignInButtonText } from './styles';
import { ActivityIndicator } from 'react-native';
import { theme } from 'stitches.config';

export function SignInButton() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <Button onPress={signIn} activeOpacity={0.7} variant="secondary">
      {isSigningIn ? (
        <ActivityIndicator color={theme.colors.blackPrimary} />
      ) : (
        <>
          <AntDesign name="github" size={24} />
          <SignInButtonText>Entrar com o GitHub</SignInButtonText>
        </>
      )}
    </Button>
  );
}
