import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import store from './src/redux/store'

import RecipesListScreen from './src/components/RecipesEpic/RecipeListScreen'
import RecipesDetailsScreen from './src/components/RecipesEpic/RecipeDetailsScreen'

export default function App() {
  return (
    <Provider store={store}>
      <RecipesListScreen />
      <RecipesDetailsScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
