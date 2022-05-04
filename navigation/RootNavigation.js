import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./Navigation";
import Home from "../screens/Home"
import Recipes from "../screens/Recipes";
import Favorites from "../screens/Favorites"
import Menu from "../components/Menu"
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/store";
import Recipe from "../components/Recipe"
import Login from "../screens/Login"
import { RecipeAPIProvider } from "../context/RecipeDataContext";

const store = configureStore()
const Stack = createStackNavigator()

export default function RootNavigation() {
    const screenOptions = {
        headerShown: false
    }

    const AppTheme = {
        colors: {
            background: "#f6efef"
        }
    }

    return (
        <ReduxProvider store={store}>
            <RecipeAPIProvider>
                <NavigationContainer ref={navigationRef} theme={AppTheme}>
                    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>

                        <Stack.Group>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Favorites" component={Favorites} />
                            <Stack.Screen name="Recipes" component={Recipes} />
                            <Stack.Screen name="Login" component={Login} />
                        </Stack.Group>

                        <Stack.Screen
                            name="Recipe"
                            component={Recipe}
                            options={{
                                headerShown: true,
                                title: "Oppskrift"
                            }} />

                    </Stack.Navigator>
                    <Menu />
                </NavigationContainer>
            </RecipeAPIProvider>
        </ReduxProvider>
    )
}