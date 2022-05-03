import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { TextInput } from 'react-native-gesture-handler'
import DropDownList from "./DropDownList"
import Ingredients from './Ingredients'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from "../../shared/Style"

//[] {}

export default function RegisterRecipe() {

    const { control, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <>
            <SafeAreaView>
                <Text style={GlobalStyles.screenTitle}>Registrer din oppskrift</Text>
            </SafeAreaView>

            <View style={styles.container}>
                <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange } }) => (
                        <TextInput
                            placeholder="Tittel på oppskrift"
                            onChangeText={value => onChange(value)}
                            style={styles.title}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="description"
                    render={({ field: { onChange } }) => (
                        <TextInput
                            placeholder="Beskrivelse"
                            onChangeText={value => onChange(value)}
                            multiline={true}
                            maxLength={150}
                            style={styles.description}
                        />
                    )}
                />

                <DropDownList />
                <Ingredients />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerTitle: {
        fontWeight: "bold",
        marginBottom: 15,
        fontSize: 18
    },
    title: {
        height: "8%",
        padding: 4,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 2
    },
    description: {
        backgroundColor: "white",
        padding: 4,
        textAlignVertical: "top",
        height: "20%",
        borderRadius: 2
    }
})