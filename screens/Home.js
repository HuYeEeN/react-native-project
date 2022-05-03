
import React from 'react'
import MonthlyRecipes from '../components/MonthlyRecipes'
import MainHeader from '../components/MainHeader'
import { ScrollView } from 'react-native-gesture-handler'
import MonthlyTip from "../components/MonthlyTip"
import { recipeData } from '../context/RecipeDataContext'

// [] {} ''

export default function Home({ navigation }) {
  const recipes = recipeData()

  return (
    <>
      <MainHeader navigation={navigation} recipes={recipes} />

      <ScrollView style={{ zIndex: -1 }} contentContainerStyle={{ paddingBottom: 10 }} >
        <MonthlyTip />
        <MonthlyRecipes navigation={navigation} recipes={recipes} />
      </ScrollView>
    </>
  )
}