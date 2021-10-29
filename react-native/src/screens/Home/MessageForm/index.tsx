import React, { useState } from 'react';
import { theme } from 'stitches.config';

import { api } from '@services/api';
import { Button } from '@components/Button';

import { ButtonText, Container, TextInput } from './styles';

export function MessageForm() {
  const [message, setMessage] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);

  async function handleSubmit() {
    if (!showTextInput) {
      setShowTextInput(true);
      return;
    }

    if (showTextInput && message === '') {
      setShowTextInput(false);
      return;
    }

    if (showTextInput && message.trim() !== '') {
      await api.post('messages', { message });
      setMessage('');
      setShowTextInput(false);
    }
  }

  return (
    <Container withBackgroundColor={showTextInput}>
      {showTextInput && (
        <TextInput
          multiline
          value={message}
          keyboardAppearance="dark"
          onChangeText={text => setMessage(text)}
          placeholderTextColor={theme.colors.grayPrimary}
          placeholder="Qual sua expectativa para o evento?"
        />
      )}

      <Button onPress={handleSubmit} activeOpacity={0.7} variant="primary">
        <ButtonText>Enviar Mensagem</ButtonText>
      </Button>
    </Container>
  );
}
