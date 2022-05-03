import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import FavoriteButton from './FavoriteButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from "react-redux"
// [] {} '' $

const isFavorite = (recipeId) => (useSelector((state) =>
  state.favoriteReducer.selectedItems.items
    .find(favoriteRecipe => favoriteRecipe.id == recipeId)
))

export default function MonthlyRecipes({ navigation, recipes }) {

  let monthlyRecipes = recipes.length > 0 ? recipes.slice(0, 4) : recipes

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Månedens oppskrifter</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          monthlyRecipes.map((recipe, index) => {
            const favorite = isFavorite(recipe.id)

            return (
              <MonthlyRecipe
                key={index}
                recipe={recipe}
                isFavorite={favorite}
                navigation={navigation} />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const MonthlyRecipe = ({ recipe, isFavorite, navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => (
        navigation.navigate("Recipe", {
          title: recipe.title,
          description: recipe.description,
          image: recipe.image,
          time: recipe.time,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
          difficulty: recipe.difficulty
        })
      )}
    >
      <ImageBackground
        source={{ uri: `${recipe.image}` }}
        imageStyle={{ borderRadius: 4 }}
        style={styles.image}
      >
        <RecipeInfo title={recipe.title} description={recipe.description} />

      </ImageBackground>
    </TouchableOpacity>

    <View style={styles.buttonPosition}>
      <FavoriteButton recipe={recipe} isFavorite={isFavorite} />
    </View>
  </View>
)

const RecipeInfo = ({ title, description }) => (
  <View style={styles.description}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingLeft: 8,
    paddingBottom: 30,
    backgroundColor: "white"
  },
  header: {
    fontSize: 20,
    color: "black",
    marginTop: 25,
    marginBottom: 20,
    alignSelf: "center"
  },
  buttonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 12,
    backgroundColor: "white",
    borderRadius: 50,
    top: 5,
    right: 17
  },
  image: {
    height: 180,
    width: 170,
    marginRight: 12
  },
  description: {
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "center",
    bottom: 5,
    padding: 10,
    borderRadius: 4,
    height: 70,
    width: 160
  },
  title: {
    fontWeight: "bold",
    color: "#3c4245",
    fontSize: 14,
  },
  text: {
    fontWeight: "bold",
    color: "#3c4245",
    fontSize: 10
  }
})