<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import stores from '@/stores'

const breadCrumb = stores.breadCrumb()
const breads = computed(() => breadCrumb.breads)
const getPath = (bread: RouteRecordRaw) => {
    // console.log('====bread', bread)
    const breadsLen = breads.value.length
    const disabledLink = Reflect.has(bread, 'redirect')
    const link = bread.path
    return disabledLink || breadsLen === 1 ? '' : link
}

</script>

<template>
    <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item
                v-for="item in breads"
                :key="item.name"
                :to="getPath(item)"
            >
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped>
.breadcrumb {
    display: flex;
    height: 50px;
    align-items: center;
    overflow: hidden;
    padding: 0 15px;
}
</style>
