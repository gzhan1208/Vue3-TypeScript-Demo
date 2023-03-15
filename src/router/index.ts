import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutesFiles = import.meta.glob('./constant/*.ts')
// console.log('====>', Object.keys(constantRoutesFiles))
let constantRoutes: Array<RouteRecordRaw> = []
Object.keys(constantRoutesFiles).forEach(async file => {
    const modules: any = await constantRoutesFiles[file]();
    const routes = modules.default
    constantRoutes = [...constantRoutes, ...routes]
})

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/Layout',
            name: 'Layout',
            component: Layout
        },
        ...constantRoutes
    ]
})

export default router
