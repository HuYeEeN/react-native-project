import React from 'react'
import { useSelector } from "react-redux"
import RecipeItem from './RecipeItem'

export default function FavoriteItems({ navigation }) {
    const items = useSelector((state) => state.favoriteReducer.selectedItems.items)

    return (
        items.map((recipe, index) => (
            <RecipeItem key={index} navigation={navigation} recipe={recipe} />
        ))
    )
}