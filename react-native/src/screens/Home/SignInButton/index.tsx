import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { theme } from 'stitches.config';
import { MotiView } from 'moti';

import { useAuth } from '@hooks/useAuth';
import { Button } from '@components/Button';

import { Container, SignInButtonText } from './styles';

export function SignInButton() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <MotiView
      transition={{ type: 'timing' }}
      from={{ translateY: 100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 100, opacity: 0 }}
    >
      <Container>
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
      </Container>
    </MotiView>
  );
}
