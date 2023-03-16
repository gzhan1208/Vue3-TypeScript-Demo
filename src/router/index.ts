import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutesFiles = import.meta.glob('./constant/*.ts', { eager: true })
const dynamicRoutesFiles = import.meta.glob('./permission/*.ts', { eager: true })

const getRoutes = (files: any, routesModules: RouteRecordRaw[] = []) => {
    Object.keys(files).forEach(file => {
        const routes = files[file].default
        routesModules = [...routesModules, ...routes]
    })
    return routesModules
}

const constantModules: Array<RouteRecordRaw> = getRoutes(constantRoutesFiles)
const dynamicModules: Array<RouteRecordRaw> = getRoutes(dynamicRoutesFiles)

export const dynamicRoutes: Array<RouteRecordRaw> = [ ...dynamicModules ]

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/Layout',
        name: 'Layout',
        component: Layout
    },
    ...constantModules
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})

export default router
