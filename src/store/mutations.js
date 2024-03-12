/**
 * setSearchedMeals - set(commit response's data into state)
 * @param {*} state 
 * @param {*} meals 
 */
function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}

function setMealByID(state, meals) {
    state.mealByID = meals;
}

function setMealByLetter(state, meals) {
    state.mealByLetter = meals;
}

/**
 * Export mutations
 */
export { 
    setSearchedMeals, 
    setMealByID,
    setMealByLetter,
}