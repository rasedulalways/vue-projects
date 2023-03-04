import {createRouter, createWebHistory} from 'vue-router'
import Home from'../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})