import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'
import * as Navigation from "../navigation/Navigation"
import GlobalStyles from "../shared/Style"

export default function Menu() {
  return (
    <View
      style={styles.menu}>
      <MenuButton
        title="Hjem"
        icon="home"
        screenName="Home"
      />
      <MenuButton
        title="Oppskrifter"
        icon="noodles"
        screenName="Recipes"
      />
      <MenuButton
        title="Favoritter"
        icon="heart-outline"
        screenName="Favorites"
      />
      <MenuButton
        title="Konto"
        icon="account-circle"
        screenName="Login"
      />
    </View>
  )
}

const MenuButton = ({ icon, title, screenName }) => (
  <TouchableOpacity
    style={{ alignItems: "center" }}
    onPress={() => Navigation.navigation(screenName, {})}
  >
    <MaterialCommunityIcons name={icon} size={25} style={GlobalStyles.themeColor} />
    <Text style={styles.text} >{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10
  },
  text: {
    fontSize: 10,
    paddingTop: 2
  }
})