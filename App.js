import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Routes } from './src/routes';
import { useFonts, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold, SourceSansPro_900Black } from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';

export default function App() {
      let [fontsLoaded] = useFonts({
      SourceSansPro_400Regular,
      SourceSansPro_600SemiBold,
      SourceSansPro_700Bold,
      SourceSansPro_900Black,
    });

    if ( !fontsLoaded) {
      return <AppLoading />
    }

  return (
    <ThemeProvider theme={theme}>
      <Routes />

    </ThemeProvider>
  );
}

