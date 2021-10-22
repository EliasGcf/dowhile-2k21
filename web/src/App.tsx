import { useContext } from 'react';

import { AuthContext } from '@contexts/auth';

import { LoginBox } from '@components/LoginBox';
import { MessageList } from '@components/MessageList';

import styles from './App.module.scss';
import { SendMessageForm } from '@components/SendMessageForm';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${user ? styles.contentSigned : ''}`}>
      <MessageList />
      {user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
