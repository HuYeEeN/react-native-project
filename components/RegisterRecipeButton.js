import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalStyle from "../shared/Style"
import { useNavigation } from '@react-navigation/native'

//[] {}

export default function RegisterRecipeButton({ screenName }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={GlobalStyle.button}
            onPress={() => {
                navigation.navigate(screenName)
            }}
        >
            <Text style={GlobalStyle.themeColor}>Registrer en oppskrift</Text>
        </TouchableOpacity>
    )
}