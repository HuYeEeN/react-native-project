import { View } from 'react-native'
import React from 'react'
import SignOutButton from './authentication/SignOutButton'
import GlobalStyle from "../shared/Style"
import RegisterRecipeButton from './RegisterRecipeButton'

//[] {}

export default function UserAccount() {
  return (
    <View style={{ ...GlobalStyle.centerOnPage, ...GlobalStyle.background }}>
      <RegisterRecipeButton screenName={"RegisterRecipe"} />
      <SignOutButton />
    </View >
  )
}