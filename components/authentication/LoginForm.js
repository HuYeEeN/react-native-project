import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'
import GlobalStyle from "../../shared/Style"
import { ErrorMessage, handleLogin } from './HandleLogin'
import { TouchableOpacity } from 'react-native-gesture-handler'

//[] {}

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [networkError, setNetworkError] = useState("")

  return (
    <View style={GlobalStyle.centerOnPage}>

      <Email
        setEmail={setEmail}
        setEmailError={setEmailError}
        emailError={emailError}
      />

      <Password
        setPassword={setPassword}
        setPasswordError={setPasswordError}
        passwordError={passwordError}
      />

      <LoginButton
        email={email}
        password={password}
        setEmailError={setEmailError}
        setPasswordError={setPasswordError}
        networkError={networkError}
        setNetworkError={setNetworkError}
      />
    </View>
  )
}

const Email = ({ setEmail, emailError }) => (
  <>
    <TextInput
      style={style.input}
      placeholder="E-postadresse"
      onChangeText={email => setEmail(email)}
    />
    <ErrorMessage errorMessage={emailError} />
  </>
)

const Password = ({ setPassword, passwordError }) => (
  <>
    <TextInput
      style={style.input}
      placeholder="Passord"
      secureTextEntry={true}
      onChangeText={password => setPassword(password)}
    />
    <ErrorMessage errorMessage={passwordError} />
  </>
)

const LoginButton = (
  { email,
    password,
    setEmailError,
    setPasswordError,
    networkError,
    setNetworkError
  }) => (
  <View>
    <TouchableOpacity
      onPress={() => {
        handleLogin(
          email,
          password,
          setEmailError,
          setPasswordError,
          setNetworkError)
      }}
      style={GlobalStyle.button} >

      <Text style={GlobalStyle.themeColor}>Logg inn</Text>
    </TouchableOpacity>

    <ErrorMessage errorMessage={networkError} />
  </View>
)

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 6,
    width: 300
  }
})