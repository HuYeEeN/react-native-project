import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../firebase";
import LoginForm from '../components/authentication/LoginForm';
import UserAccount from "../components/UserAccount"
import RegisterRecipe from '../components/registerRecipeForm/RegisterRecipe'

//[] {}

export default function Login() {
  const auth = useAuth
  const currentUser = auth()
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser
        ? (
          <>
            <Stack.Screen name="UserAccount" component={UserAccount} />
            <Stack.Screen name="RegisterRecipe" component={RegisterRecipe} />
          </>
        )
        : <Stack.Screen name="LoginForm" component={LoginForm} />
      }
    </Stack.Navigator>
  )
}