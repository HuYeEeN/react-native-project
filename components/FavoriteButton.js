import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch } from 'react-redux'

export default function FavoriteButton({ recipe, isFavorite }) {
  const dispatch = useDispatch()
  const dispatchAdd = (item, buttonValue) =>
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: {
        ...item,
        buttonValue
      }
    })

  const dispatchRemove = (item, buttonValue) =>
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: {
        ...item,
        buttonValue
      }
    })

  return (
    <TouchableWithoutFeedback
      onPress={() => (
        isFavorite
          ? dispatchRemove(recipe, false)
          : dispatchAdd(recipe, true)
      )}
    >
      <View style={styles.buttonStyle}>
        <MaterialCommunityIcons
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color="#f83e4b"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: 30,
    height: 30
  }
})