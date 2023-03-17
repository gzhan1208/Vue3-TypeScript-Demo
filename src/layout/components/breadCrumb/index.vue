<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import stores from '@/stores'

const breadCrumb = stores.breadCrumb()
const breads = computed(() => breadCrumb.breads)

</script>

<template>
    <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item
                v-for="item in breads"
                :key="item"
                :to="{ path: item }"
            >
                {{ item }}
            </el-breadcrumb-item>
<!--            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
        </el-breadcrumb>
    </div>
</template>

<style scoped>
.breadcrumb {
    display: flex;
    height: 50px;
    align-items: center;
    overflow: hidden;
}
</style>
