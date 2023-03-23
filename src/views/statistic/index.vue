<script lang="ts">
import {defineComponent} from 'vue'
import CardItem from './cardItem.vue'
export default defineComponent({
    components: {
        CardItem
    },
    setup() {
        const data = [
            { title: '统计一', count: 12456 },
            { title: '统计二', count: 6416 },
            { title: '统计三', count: 3512 },
            { title: '统计四', count: 16554 },
        ]
        return {
            data
        }
    }
})
</script>

<template>
    <el-row :gutter="15">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="item in data" :key="item.title">
            <CardItem :count="item.count" :title="item.title" />
        </el-col>
    </el-row>
</template>

<style scoped lang="scss">
.box-card {
    height: 120px;
}
</style>
