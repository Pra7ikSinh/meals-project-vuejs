import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import MealsByIngredients from '../views/MealsByIngredients.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
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
        component: MealsByIngredients,
    },
    {
        path: '/search-by-letter/:letter?',
        name: 'search-by-letter',
        component: MealsByLetter,
    },
    {
        path: '/search-by-name/:name?',
        name: 'search-by-name',
        component: MealsByName,
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