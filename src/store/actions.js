import axiosClient from "../config/axiosClient";

/**
 * searchMeals - search meals by name.
 * @param {*} commit 
 * @param {*} searchedKeyword 
 */
export function searchMeals(mutation, searchedKeyword) {
    axiosClient.get(`search.php?s=${searchedKeyword}`)
        .then((response) => {
            // call mutation to commit the data into state.
            mutation.commit('setSearchedMeals', response.data.meals);
        });
}