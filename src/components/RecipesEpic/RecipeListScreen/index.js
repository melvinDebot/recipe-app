import React, {useEffect} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { fetchRecipes } from '../../../api/recipes';
import { useDispatch, useSelector } from 'react-redux';

import {getRecipes} from '../../../redux/selectors'

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const recipes = useSelector(getRecipes)

  useEffect(() => {
    fetchRecipes(dispatch)
  })
  return (
    <View style={styles.container}>
      <Text>RecipeListScreen</Text>
      {recipes.map((recipe) => {
        return <Text>{ recipe.title}</Text>
      })}
      <Button onPress={() => {
        navigation.navigate('RecipeDetails')
      }} title="move" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default RecipesListScreen;
