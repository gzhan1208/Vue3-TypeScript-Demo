<script lang="ts">
import { ref } from 'vue'
import {useRoute, useRouter} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import routes from '@/router'
import stores from '@/stores'
import BarItem from '@/layout/components/BarItem.vue'

export default {
    name: 'SideBar',
    components: {
        BarItem
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const permission = (stores.usePermissionStore)()
        const breads = (stores.breadCrumb)()
        const tabViews = (stores.tabViewsStore)()

        const activeIndex = ref('/Layout')
        const dynamicRoutes = permission.getDynamicRoutes
        const handleSelect = (index: RouteRecordRaw, indexPath: Array<RouteRecordRaw>,
                              item: object, routeResult: any) => {
            const path = `${index.path}`
            activeIndex.value = index
            tabViews.addTab(index)
            breads.updateBread(indexPath)
            router.push({ path })
            // console.log('=====>> bread', bread)
            // console.log('=====>> select', index, index.path)
            // console.log('=====>> select', item)
            // console.log('=====>> select', routeResult)
        }
        // console.log('=====>> ', permission.getDynamicRoutes)
        return {
            route,
            handleSelect,
            dynamicRoutes,
            activeIndex
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
            :default-active="activeIndex"
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
    /* display: flex; */
    /* justify-content: center; */
    /* padding: 0 15px; */
    position: fixed;
    width: 249px;
    height: 100%;
    /*border-right: 1px solid var(--color-background-grey-1);*/
    box-shadow: 0 1px 1px #888;
    /*overflow: hidden;*/
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
