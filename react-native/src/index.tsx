import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Home } from '@screens/Home';
import { AuthProvider } from '@contexts/auth/Provider';

export function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!isFontsLoaded) {
    return (
      <>
        <StatusBar style="light" />

        <AppLoading />
      </>
    );
  }

  return (
    <>
      <StatusBar style="light" />

      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  );
}
