import { Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import GlobalStyles from "../shared/Style"
import FavoriteItems from '../components/FavoriteItems'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Favorites({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <Text style={GlobalStyles.screenTitle}>Favoritter</Text>
      </SafeAreaView>

      <ScrollView contentContainerStyle={{ paddingBottom: 10, marginHorizontal: 15 }}>
        <FavoriteItems navigation={navigation} />
      </ScrollView>
    </>
  )
}