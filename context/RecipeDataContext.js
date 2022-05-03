import React, { useContext, useEffect, useState } from "react";

// [] {} ''
const RecipeDataContext = React.createContext()

export function recipeData() {
    return useContext(RecipeDataContext)
}

export function RecipeAPIProvider({ children }) {
    const [recipes, setRecipes] = useState([])

    const getRecipes = () => {
        const recipes = "http://192.168.1.234:3000/recipes"

        fetch(recipes)
            .then((res) => res.json())
            .then((json) => setRecipes(json))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <RecipeDataContext.Provider value={recipes}>
            {children}
        </RecipeDataContext.Provider>
    )
}