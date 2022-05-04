import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalStyle from "../../shared/Style"
import { logOut } from "../../firebase";

export default function SignOutButton() {
    return (
        <TouchableOpacity
            style={GlobalStyle.button}
            onPress={() => (
                handleLogOut()
            )}
        >
            <Text style={GlobalStyle.themeColor}>Logg ut</Text>
        </TouchableOpacity>
    )
}

async function handleLogOut() {
    await logOut().catch((error) => console.log(error))
}