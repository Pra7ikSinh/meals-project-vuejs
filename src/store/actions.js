import axiosClient from "../config/axiosClient";

/**
 * searchMeals - search meals by name.
 * @param {*} mutation 
 * @param {*} searchedKeyword 
 */
function searchMeals(mutation, searchedKeyword) {
    axiosClient.get(`search.php?s=${searchedKeyword}`)
        .then((response) => {
            // call mutation to commit the data into state.
            mutation.commit('setSearchedMeals', response.data.meals);
        });
}

/**
 * getMealByID - get meal by id
 * @param {*} mutation 
 * @param {*} mealID  
 */
function getMealByID(mutation, mealID) {
    axiosClient.get(`lookup.php?i=  ${mealID}`)
        .then((response) => {
            mutation.commit('setMealByID', (response.data.meals) !== null ? response.data.meals[0] : {});
        })
}

/**
 * getMealByLetter - get meals by letter
 * @param {*} mutation 
 * @param {*} mealByLetter  
 */
function getMealByLetter(mutation,mealByLetter){
    axiosClient.get(`search.php?f=${mealByLetter}`)
                .then((response)=>{
                    mutation.commit('setMealByLetter', response.data.meals);
                })
}

/**
 * Export functions
 */
export { searchMeals, getMealByID, getMealByLetter}