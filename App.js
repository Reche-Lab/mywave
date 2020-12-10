// import { StatusBar } from 'expo-status-bar';
import React from 'react'

import {useFonts} from 'expo-font'
import {Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

  if (!fontsLoaded) return null

  return (
    <Routes />
  );
}
