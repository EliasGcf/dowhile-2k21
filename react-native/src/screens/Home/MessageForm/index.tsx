import React from 'react';

import { Button } from '@components/Button';

import { ButtonText } from './styles';

export function MessageForm() {
  return (
    <Button activeOpacity={0.7} variant="primary">
      <ButtonText>Enviar Mensagem</ButtonText>
    </Button>
  );
}
