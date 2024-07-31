import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Surroundings from '../views/Surroundings.vue'
import Join from '../views/Join.vue'
import Map from '../views/Map.vue'

const routes = [
    {
        path: '/',
        name: '主页',
        component: Home
    },
    {
        path: '/surroundings',
        name: '周边环境',
        component: Surroundings
    },
    {
        path: "/map",
        name: "线路图",
        component: Map,
    },
    {
        path: '/join',
        name: '加入',
        component: Join
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router