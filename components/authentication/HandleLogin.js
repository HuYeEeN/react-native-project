import { Text, StyleSheet } from 'react-native'
import React from 'react'
import validator from "email-validator"
import { signIn } from '../../firebase'

export async function handleLogin(
    email,
    password,
    setEmailError,
    setPasswordError,
    setNetworkError
) {
    var isValid = false

    if (email) {
        validateEmail(email)
            ? isValid = true
            : (setEmailError("Ugyldig epost"), isValid = false)
    }

    if (password) {
        validatePassword(password)
            ? isValid = true
            : (setPasswordError("Passordet må inneholde minst 8 tegn"), isValid = false)
    }

    if (isValid) {
        await signIn(email, password)
            .catch((error) => {

                switch (error.code) {
                    case "auth/too-many-requests":
                        setNetworkError("For mange innloggingsforsøk. Prøv igjen senere")
                    case "auth/user-not-found":
                        setNetworkError("Fant ikke bruker")
                }

                console.log(error)
            })
    }
}

const validateEmail = (email) => (
    validator.validate(email)
)

const validatePassword = (password) => (
    password.length >= 8
)

export const ErrorMessage = ({ errorMessage }) => (
    <>
        {
            errorMessage === ""
                ? <Text></Text>
                : <Text style={style.error}>{errorMessage}</Text>
        }
    </>
)

const style = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 13,
        marginTop: 8,
        marginBottom: 15
    }
})