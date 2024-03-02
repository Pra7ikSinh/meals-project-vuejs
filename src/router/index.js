import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'

/** 
 * Define Routes 
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
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