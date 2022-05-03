import { combineReducers } from "redux"
import favoriteReducer from "./favoriteReducer"

// [] {} '' $

let reducers = combineReducers({
    favoriteReducer: favoriteReducer
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer