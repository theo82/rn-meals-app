import React from 'react';
import { useFonts } from 'expo-font';

import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {

  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return (
      <AppLoading/>
    );
  }

  console.log(fontsLoaded);

  return <MealsNavigator />
}
