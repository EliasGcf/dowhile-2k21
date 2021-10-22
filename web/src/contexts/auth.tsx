import { createContext, useEffect, useState } from 'react';

import { api } from '@services/api';

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  };
};

type AuthProvider = {
  children: React.ReactNode;
};

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  signOut: () => void;
  signInUrl: string;
};

const signInUrl = new URL('https://github.com/login/oauth/authorize');
signInUrl.searchParams.append('scope', 'user');
signInUrl.searchParams.append('client_id', '68df920cec38caf45c22');

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hasGithubCode = url.searchParams.has('code');

    if (!hasGithubCode) return;

    const code = url.searchParams.get('code');
    url.searchParams.delete('code');

    window.history.pushState({}, '', url.toString());

    if (!code) return;

    signIn(code);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@DoWhile:token');

    if (!token) return;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    api.get<User>('profile').then(response => {
      setUser(response.data);
    });
  }, []);

  async function signIn(gitHubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: gitHubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@DoWhile:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem('@DoWhile:token');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        signInUrl: signInUrl.toString(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
