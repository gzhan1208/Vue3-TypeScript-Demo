<script lang="ts">
import { useRoute } from 'vue-router'
import routes from '@/router'

export default {
    name: 'SideBar',
    setup() {
        const route = useRoute();
        console.log('======>', routes);
        const handleClose = () => { }
        const handleOpen = () => { }
        return {
            route,
            handleOpen,
            handleClose
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="logo">
            <h1>Vue3 管理后台</h1>
        </div>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
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
