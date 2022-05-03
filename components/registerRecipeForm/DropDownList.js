import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React, { useEffect, useState } from 'react'

//[] {}

const data = [
    { value: "20-40 min", id: 1 },
    { value: "40-60 min", id: 2 },
    { value: "over 60 min", id: 3 }
]

export default function DropDownList() {
    const [visible, setVisible] = useState(false)
    const [selectedId, setSelectedId] = useState("")

    const toggleDropDown = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (selectedId) {
            setVisible(false)
        }
    }, [selectedId])

    const onDropdown = () => {
        if (visible) {
            return (
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        renderItem(
                            item,
                            selectedId,
                            setSelectedId
                        )
                    }
                    keyExtractor={item => item.id}
                    style={[styles.flatlist, styles.container]}
                />
            )
        }
    }

    return (
        <View style={styles.dropdown}>
            <Text style={styles.title}>Forberedelsestid: </Text>
            <TouchableOpacity
                onPress={toggleDropDown}
                style={styles.container}
            >

                <View style={styles.centerItems}>
                    <Text>{selectedId ? selectedId.value : "Velg tid"}</Text>
                    <MaterialCommunityIcons name='chevron-down' size={20} />
                </View>
            </TouchableOpacity>

            {onDropdown()}
        </View>
    )
}

const renderItem = (item, selectedId, setSelectedId) => {
    return (
        <TouchableOpacity
            onPress={() =>
                setSelectedId(item)
            }
        >
            <View style={styles.centerItems}>
                <Text>{item.value}</Text>
                <MaterialCommunityIcons name={selectedId.id === item.id ? "check" : null} size={17} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10
    },
    dropdown: {
        width: 150
    },
    centerItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 4,
        backgroundColor: "white"
    },
    flatlist: {
        flexGrow: 0,
        backgroundColor: "white"
    },
    item: {
        flexDirection: "row"
    },
    container: {
        borderWidth: 1,
        borderColor: "#d8d7d7",
    }
})