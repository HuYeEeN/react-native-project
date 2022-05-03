import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

//[] {}

export default function Ingredients() {
    const [inputFields, setInputFields] = useState([
        { itemId: "" }
    ])

    return (
        <View>
            <Text style={styles.title}>Legg til ingredienser</Text>
            {inputFields.map((item) => (
                <CustomerInput
                    key={item.itemId}
                    item={item}
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                />
            ))}

            <View>
                <AddButton
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                />
            </View>
        </View>
    )
}

const addItem = (inputFields, setInputFields) => {
    setInputFields([...inputFields, { itemId: Math.random() }])
}

const removeItem = (item, inputFields, setInputFields) => {
    setInputFields(inputFields.filter(input => input != item))
}

const CustomerInput = ({ item, inputFields, setInputFields }) => (
    <View style={styles.inputField}>
        <TextInput
            style={styles.textInput}
        />
        <RemoveButton
            item={item}
            inputFields={inputFields}
            setInputFields={setInputFields}
        />
    </View>
)

const AddButton = ({ inputFields, setInputFields }) => (
    <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={() => (
            addItem(inputFields, setInputFields)
        )}
    >
        <Text style={styles.text}>Legg til</Text>
    </TouchableOpacity>
)

const RemoveButton = ({ item, inputFields, setInputFields }) => (
    <TouchableOpacity
        style={[styles.button, styles.removeButton]}
        onPress={() => (
            removeItem(item, inputFields, setInputFields)
        )}
    >
        <Text style={styles.text}>Fjern</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10
    },
    inputField: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    textInput: {
        borderRadius: 2,
        backgroundColor: "white",
        flex: 1,
        marginRight: 5,
        height: 35,
        padding: 8
    },
    button: {
        borderRadius: 2,
        backgroundColor: "#e95f5f",
        padding: 3
    },
    addButton: {
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    removeButton: {
        marginLeft: 10
    },
    text: {
        color: "white",
        alignSelf: "center",
        paddingHorizontal: 8
    }
})