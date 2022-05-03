import { StyleSheet } from 'react-native'

// [] {} '' $

export default StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 15
    },
    recipeItem: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 5,
        marginBottom: 17
    },
    recipeTitle: {
        fontSize: 16,
        paddingBottom: 5,
        fontWeight: "bold"
    },
    recipeImage: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    recipeDescription: {
        margin: 10,
        flexShrink: 1
    },
    button: {
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: "white"
    },
    centerOnPage: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    fontColor: {
        color: "#55483e"
    },
    themeColor: {
        color: "#f83e4b"
    }
})