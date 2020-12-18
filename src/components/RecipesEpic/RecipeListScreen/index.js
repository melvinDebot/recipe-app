import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RecipesListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>RecipeListScreen</Text>
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
