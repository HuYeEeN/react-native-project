import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'

const image =
    "https://bramat.no/images/images/kosthold/smoothiebowl.jpg"

export default function MonthlyTip() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}></Image>

            <View style={styles.textbox}>
                <Text style={styles.text}>Tips</Text>
                <Text style={styles.description}>Pynt smoothien med sesongens frukt og bær</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textbox: {
        backgroundColor: "#fffde8",
        height: 130,
        alignItems: "center",
        padding: 12
    },
    description: {
        fontSize: 25,
        textAlign: "center",
        paddingTop: 5
    },
    image: {
        width: "100%",
        height: 220
    },
    text: {
        fontSize: 17
    }
})