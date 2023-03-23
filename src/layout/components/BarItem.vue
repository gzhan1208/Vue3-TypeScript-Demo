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
    }
}
</script>
<!-- 当前只考虑2级目录，N级则提取代码，递归遍历 -->
<template>
    <el-sub-menu v-if="item.children && item.children.length" :index="item.path">
        <template #title>
            <el-icon>
                <setting />
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
            <el-menu-item v-for="route in item.children" :key="route.name" :index="`${item.path + route.path}`">
                <el-icon>
                    <setting />
                </el-icon>
                <span>{{ route.name }}</span>
            </el-menu-item>
        </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
        <el-icon>
            <setting />
        </el-icon>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<style scoped>

</style>
