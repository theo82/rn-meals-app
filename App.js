import React from 'react';
import { useFonts } from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'
import mealsReducers from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducers
});

const store = createStore(
  rootReducer
);

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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}
