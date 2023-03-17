<script lang="ts">

export default {
    name: 'SideBar',
    props: {
        item: {
            type: Object,
            required: true
        },
        collapse: {
            type: Boolean,
        },
    },
    setup() {

        return {

        }
    }
}
</script>

<template>
    <el-sub-menu v-if="item.children && item.children.length" :index="item.name">
        <template #title>
            <el-icon>
                <setting />
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
            <el-menu-item v-for="route in item.children" :key="route.name" :index="route.name">
                <el-icon>
                    <setting />
                </el-icon>
                <span>{{ route.name }}</span>
            </el-menu-item>
        </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item v-else :index="item.name">
        <el-icon>
            <setting />
        </el-icon>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<style scoped>

</style>
