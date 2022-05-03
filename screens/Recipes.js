import { Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import RecipeItem from "../components/RecipeItem"
import GlobalStyles from "../shared/Style"
import { SafeAreaView } from 'react-native-safe-area-context'
import { recipeData } from '../context/RecipeDataContext'

// [] {} '' $

export default function Recipes({ navigation }) {
  const recipes = recipeData()

  return (
    <>
      <SafeAreaView>
        <Text style={GlobalStyles.screenTitle}>Oppskrifter</Text>
      </SafeAreaView>

      <ScrollView contentContainerStyle={{ paddingBottom: 10, marginHorizontal: 15 }}>
        {
          recipes.map((recipe, index) => (

            <RecipeItem
              key={index}
              navigation={navigation}
              recipe={recipe}
            />
          ))
        }
      </ScrollView>
    </>
  )
}