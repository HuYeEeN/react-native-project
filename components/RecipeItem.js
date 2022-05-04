import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from "react-redux"
import React from 'react'
import GlobalStyles from "../shared/Style"
import FavoriteButton from './FavoriteButton'

export default function RecipeItem({ navigation, recipe }) {
    const { image, title, description, ingredients, time, steps, difficulty } = recipe

    const isFavorite = useSelector((state) =>
        state.favoriteReducer.selectedItems.items
            .find(favoriteRecipe => favoriteRecipe.id == recipe.id)
    )

    return (
        <View>
            <View style={styles.favoriteButton}>
                <FavoriteButton recipe={recipe} isFavorite={isFavorite} />
            </View>

            <TouchableOpacity
                onPress={() => (
                    navigation.navigate("Recipe", {
                        title: title,
                        description: description,
                        image: image,
                        time: time,
                        ingredients: ingredients,
                        steps: steps,
                        difficulty: difficulty
                    })
                )}
            >
                <View style={GlobalStyles.recipeItem}>
                    <RecipeImage image={image} />

                    <View style={GlobalStyles.recipeDescription}>
                        <RecipeSummary title={title} description={description} />
                        <RecipeInfo time={time} difficulty={difficulty} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const RecipeImage = ({ image }) => (
    <Image source={{ uri: image }} style={GlobalStyles.recipeImage}></Image>
)

const RecipeSummary = ({ title, description }) => (
    <View>
        <Text style={GlobalStyles.recipeTitle}>{title}</Text>
        <Text>{description}</Text>
    </View>
)

const RecipeInfo = ({ time, difficulty }) => (
    <View style={styles.info}>
        <Text style={styles.time}>• {time}</Text>
        <Text style={styles.difficulty}>• {difficulty}</Text>
    </View>
)

const styles = StyleSheet.create({
    info: {
        marginTop: 10,
        flexDirection: "row"
    },
    time: {
        fontSize: 12,
        marginRight: 15
    },
    difficulty: {
        fontSize: 12
    },
    favoriteButton: {
        position: "absolute",
        zIndex: 1,
        right: 0
    }
})