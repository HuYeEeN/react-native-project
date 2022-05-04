let defaultState = {
    selectedItems: { items: [] }
}

let favoriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': {
            let newState = { ...state }

            if (action.payload.buttonValue) {
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload]
                }
            }
            return newState
        }

        case 'REMOVE_FROM_FAVORITES': {
            let newState = { ...state }

            if (!action.payload.buttonValue) {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => (item.title !== action.payload.title)
                        )
                    ]
                }
            }

            return newState
        }

        default:
            return state
    }
}

export default favoriteReducer