<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import routes from '@/router'
import stores from '@/stores'
import BarItem from '@/layout/components/BarItem.vue'
import {breadCrumb} from "@/stores/modules/breadCrumb";

export default {
    name: 'SideBar',
    components: {
        BarItem
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const selected = ref('')
        const permission = (stores.usePermissionStore)()
        const breads = (stores.breadCrumb)()
        const handleClose = (index, indexPath) => {
            // console.log('=====>> close', index)
            // console.log('=====>> close', indexPath)
        }
        const handleOpen = (index, indexPath) => {
            // console.log('=====>> open', index)
            // console.log('=====>> open', indexPath)
        }
        const handleSelect = (index, indexPath, item, routeResult) => {
            router.push({ path: `/${index}` })
            breads.updateBread(indexPath)
            // console.log('=====>> select', index)
            // console.log('=====>> select', indexPath)
            // console.log('=====>> select', item)
            // console.log('=====>> select', routeResult)
        }
        console.log('=====>> ', permission.dynamicRoutes)
        return {
            route,
            handleOpen,
            handleClose,
            handleSelect,
            permission
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="logo">
            <h1>Vue3 管理后台</h1>
        </div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            text-color="#fff"
            unique-opened
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
        >
            <bar-item
                v-for="route in permission.dynamicRoutes"
                :key="route.name"
                :item="route"
            />
        </el-menu>
    </div>
</template>

<style scoped>
.container {
    /* display: flex; */
    /* justify-content: center; */
    /* padding: 0 15px; */
}

.logo {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 75px;
    align-items: center;
    border-bottom: 1px solid #666;
}

.logo h1 {
    font-size: 1.5rem;
}
</style>
