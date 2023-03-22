<script setup lang="ts">
import {toRaw} from 'vue';
import {useRouter} from 'vue-router'
import stores from '@/stores'

const tabViews = stores.tabViewsStore()
const tabsValue = toRaw(tabViews.tabsValue)

const router = useRouter();
const handleClick = (v: any) => {
    const d = toRaw(v.props)
    const path = d.name
    path && router.push(path)
}
const removeTab = (v: string) => {
    const i = tabsValue.findIndex(item => item.path === v)
    if (!(i < 0)) {
        tabViews.removeTab(i)
        router.push({ path: tabsValue[i - 1].path })
    }
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
