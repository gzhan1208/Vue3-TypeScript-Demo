<script lang="ts">
import { toRaw } from 'vue'
import {useRouter} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import stores from '@/stores'
import BarItem from '@/layout/components/BarItem.vue'

export default {
    name: 'SideBar',
    components: {
        BarItem
    },
    setup() {
        const router = useRouter();
        const permission = (stores.usePermissionStore)()
        const breads = (stores.breadCrumb)()
        const tabViews = (stores.tabViewsStore)()

        const dynamicRoutes = permission.getDynamicRoutes

        const findRoute = (data: any, path: string) => {
            const arr = toRaw(data)
            const r = arr.find((v: RouteRecordRaw) => v.path === path)
            if (r) {
                return r
            }
            arr.children && findRoute(arr.children, path)
        }
        const handleSelect = (path: string, indexPath: Array<string>) => {
            const breadArr = []
            const len = indexPath.length
            const r = dynamicRoutes.find((v: RouteRecordRaw) => v.path === indexPath[0])
            breadArr.push(r)
            if (len > 1) {
                for (let i = 1; i < len; i++) {
                    if (!r.children) break
                    const _path = indexPath[i].split('/').pop()
                    const _r = findRoute(r.children, `/${_path}`)
                    _r && breadArr.push(_r)
                }
            }
            permission.setCurrentRoute(path)
            tabViews.addTab(breadArr[len - 1], breadArr)
            breads.updateBread(breadArr)

            const p = path.split('/').pop()
            router.push({ path: p })
        }
        return {
            handleSelect,
            dynamicRoutes,
            permission
        }
    }
}
</script>

<template>
    <div class="bar-container">
        <div class="logo">
            <h1>Vue3 管理后台</h1>
        </div>
        <el-menu
            :default-active="permission.currentRoute"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            text-color="#fff"
            unique-opened
            @select="handleSelect"
        >
            <bar-item
                v-for="route in dynamicRoutes"
                :key="route.name"
                :item="route"
            />
        </el-menu>
    </div>
</template>

<style scoped>
.bar-container {
    position: fixed;
    width: 249px;
    height: 100%;
    /*border-right: 1px solid var(--color-background-grey-1);*/
    box-shadow: 0 1px 1px #888;
}

.logo {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 85px;
    align-items: center;
    box-shadow: 0 0 1px #888;
}

.logo h1 {
    font-size: 1.5rem;
}
</style>
