import * as React from "react"

// [] {} ''

export const navigationRef = React.createRef()

export function navigation(name, param) {
    navigationRef.current?.navigate(name, param)
}