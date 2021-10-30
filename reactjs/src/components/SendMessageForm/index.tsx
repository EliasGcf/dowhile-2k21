import { useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import { AuthContext } from '@contexts/auth';

import styles from './styles.module.scss';
import { api } from '@services/api';

export function SendMessageForm() {
  const [message, setMessage] = useState('');

  const { user, signOut } = useContext(AuthContext);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!message.trim()) return;

    await api.post('messages', { message });

    setMessage('');
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSubmit} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>

        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Qual a sua expectativa para o evento?"
          onChange={event => setMessage(event.target.value)}
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}
