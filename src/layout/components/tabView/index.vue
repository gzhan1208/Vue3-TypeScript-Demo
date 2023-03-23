<script setup lang="ts">
import {toRaw} from 'vue';
import {useRouter} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import stores from '@/stores'

const tabViews = stores.tabViewsStore()
const tabsValue = toRaw(tabViews.tabsValue)
const permission = (stores.usePermissionStore)()
const breads = (stores.breadCrumb)()

const router = useRouter();

const getCompletePath = (v) => v.reduce((a: string, b: RouteRecordRaw) => a + b.path, '')
const handleClick = (v: any) => {
    const d = toRaw(v.props)
    const path = d.name
    const item = tabsValue.find(v => v.path === path)
    const completePath = getCompletePath(item.tabs)
    permission.setCurrentRoute(completePath || '')
    breads.updateBread(item.tabs)
    router.push(path)
}
const removeTab = (v: string) => {
    const i = tabsValue.findIndex(item => item.path === v)
    tabViews.removeTab(i)
    const tabValue = tabsValue[i - 1]
    const path = tabValue.path
    const completePath = getCompletePath(tabValue.tabs)
    permission.setCurrentRoute(completePath)
    breads.updateBread(tabValue.tabs)
    router.push(path)
}
</script>

<template>
    <div class="tab-container">
        <el-tabs
            v-model="tabViews.selectedValue"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
            @tab-remove="removeTab"
        >
            <el-tab-pane
                v-for="item in tabViews.tabsValue"
                :key="item.path"
                :label="item.name"
                :name="item.path"
                :closable="!item.closable"
            />
        </el-tabs>
    </div>
</template>

<style scoped lang="scss">
.tab-container {
    width: 100%;
    height: 34px;
    box-shadow: 1px 1px 5px #888;
    padding: 2px 15px;
    :deep(.el-tabs) {
        --el-tabs-header-height: 30px;
    }
    :deep(.el-tabs__header) {
        margin: 0;
    }
    :deep(.el-tabs--card .el-tabs__header) {
        border-bottom: none;
    }
    :deep(.el-tabs--card .el-tabs__header .el-tabs__item) {
        border-bottom-color: var(--el-border-color-light);
    }

}
</style>
