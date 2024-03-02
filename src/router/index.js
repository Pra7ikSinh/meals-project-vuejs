import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';

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
        path: '/search-by-letter/:letter',
        name: 'search-by-letter',
        component: MealList,
    }
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