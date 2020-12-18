import React from "react";
import { View, Text, Button } from "react-native";

const RecipesDetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>RecipeDetailsScreen</Text>
      <Button title="revenir" onPress={() => {
        navigation.goBack()
      }} />
    </View>
  );
};

export default RecipesDetailsScreen;
