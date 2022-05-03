import { View, StyleSheet } from 'react-native'
import React from 'react'
import Searchbar from './Searchbar'

export default function MainHeader({ navigation, recipes }) {
  return (
    <View style={styles.container}>
      <Searchbar navigation={navigation} recipes={recipes}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: "#f83e4b",
    height: 130,
    paddingBottom: 8
  }
})