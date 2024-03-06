import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import SearchByName from '../views/SearchByName.vue';
import MealDetails from '../views/MealDetails.vue';

/** 
 * Define Routes 
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/search-by-ingredients/:ingredients?',
        name: 'search-by-ingredients',
        component: SearchByIngredients,
    },
    {
        path: '/search-by-letter/:letter?',
        name: 'search-by-letter',
        component: SearchByLetter,
    },
    {
        path: '/search-by-name/:name?',
        name: 'search-by-name',
        component: SearchByName,
    },
    {
        path: '/meal/:id?',
        name: 'meal-details',
        component: MealDetails,
    },
];

/**
 * Define Routers
 */
const router = createRouter({
    history: createWebHistory(),
    routes,
})

/**
 * Export routes
 */
export default router