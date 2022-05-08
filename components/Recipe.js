import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import style from "../shared/Style"
import { Divider } from 'react-native-elements/dist/divider/Divider'

export default function Recipe(props) {
    const { title, description, image, time, ingredients, steps } = props.route.params

    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 10
            }} >
            <RecipeImage image={image} />

            <View style={style.background}>
                <Description
                    title={title}
                    description={description}
                    time={time}
                />
                <Ingredients ingredients={ingredients} />
                <CookingSteps steps={steps} />
            </View>
        </ScrollView>
    )
}

const RecipeImage = ({ image }) => (
    <View style={{ width: "100%", height: 200 }}>
        <Image source={{ uri: image }} style={styles.image}></Image>
    </View>
)

const Description = ({ title, description, time }) => (
    <View style={{ ...styles.container, ...styles.description }}>
        <Text style={styles.title}>{title}</Text>
        <Divider style={styles.divider} />
        <Time time={time} />
        <Divider style={styles.divider} />
        <Text>{description}</Text>
    </View>
)

const Time = ({ time }) => (
    <View style={styles.time}>
        <MaterialCommunityIcons name="clock-outline" size={17} />
        <Text style={{ marginTop: 5 }}>{time}</Text>
    </View>
)

const Ingredients = ({ ingredients }) => (
    <View
        style={styles.container}
    >
        {ingredients.map((ingredient, key) => (
            <View key={key} style={styles.ingredient}>
                <BouncyCheckbox fillColor="#e95f5f" />
                <Text>{ingredient}</Text>
            </View>
        ))}
    </View>
)

const CookingSteps = ({ steps }) => (
    <Text style={styles.container}>{steps}</Text>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 15,
        padding: 20
    },
    description: {
        alignItems: "center",
        marginTop: 20
    },
    ingredient: {
        flexDirection: "row",
        paddingVertical: 8,
        alignItems: "center"
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 25
    },
    time: {
        alignItems: "center",
        marginBottom: 15
    },
    divider: {
        width: "100%",
        marginVertical: 20
    }
})