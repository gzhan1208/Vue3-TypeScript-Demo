import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { constantRoutes, dynamicRoutes } from '@/router';
import type { StoreDefinition } from 'pinia'

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
    return true
}

const filterRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
    const res: RouteRecordRaw[] = []
    routes.forEach(route => {
        const r = { ...route }
        if (hasPermission(roles, r)) {
            if (r.children) {
                r.children = filterRoutes(r.children, roles)
            }
            res.push(r)
        }
    })
    return res
}

export const usePermissionStore: StoreDefinition = defineStore({
    id: 'permission',
    state: () => ({
        routes: [] as RouteRecordRaw[],
        dynamicRoutes: [] as RouteRecordRaw[]
    }),
    getters: {
        routes: (state: any) => state.routes,
        dynamicRoutes: (state: any) => state.dynamicRoutes,
    },
    actions: {
        setRoutes(roles: string[]) {
            let accessedRoutes: RouteRecordRaw[]
            if (roles.includes('admin')) {
                accessedRoutes = dynamicRoutes
            } else {
                accessedRoutes = filterRoutes(dynamicRoutes, roles)
            }
            this.routes = [...constantRoutes, ...accessedRoutes]
            this.dynamicRoutes = accessedRoutes
        },
    }
})
