import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

// [] {} ''

export default function Searchbar({ navigation, recipes }) {
    const [searchTerm, setSearchTerm] = useState("")

    const matchingTerms = () => {
        if (searchTerm == "") {
            return []
        }

        return (
            recipes.filter(recipe => {
                if (recipe.title.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                    return recipe
                }
            })
        )
    }

    return (
        <View style={style.container}>
            <View style={style.input}>
                <Icon />
                <TextInput
                    onChangeText={input => setSearchTerm(input)}
                    placeholder="Hva vil du lage i dag?"
                />
            </View>
            {
                (matchingTerms().length == 0)
                    ? <></>
                    : <Results navigation={navigation} matchingTerms={matchingTerms()} />
            }
        </View>
    )
}

const Icon = () => (
    <View style={{ ...style.icon, ...style.textBackgroundColor }}>
        <MaterialCommunityIcons name="magnify" size={24} />
    </View>
)

const Results = ({ navigation, matchingTerms }) => {
    return (
        <ScrollView style={style.results}>
            {
                matchingTerms.map((recipe, index) => (
                    <TouchableOpacity
                        key={index}
                        style={style.button}
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

                        <Text>{recipe.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        position: "relative",
        marginHorizontal: 8
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 2,
        padding: 8,
        backgroundColor: "white"
    },
    icon: {
        backgroundColor: "white",
        marginHorizontal: 5
    },
    button: {
        paddingVertical: 4
    },
    results: {
        backgroundColor: "white",
        borderRadius: 2,
        position: "absolute",
        top: "100%",
        width: "100%",
        paddingLeft: 42,
        paddingBottom: 8,
        maxHeight: 200
    }
})