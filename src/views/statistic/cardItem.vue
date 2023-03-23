<script lang="ts">
export default {
    name: "cardItem",
    props: {
        count: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        }
    }
}
</script>

<template>
    <el-card class="box-card" shadow="hover">
        <div class="icon">

        </div>
        <div class="statistic">
            <el-statistic :title="title" :value="count" />
        </div>
    </el-card>
</template>

<style scoped lang="scss">
.box-card {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 15px;
    .icon {
        float: left;
        width: 80px;
        height: 80px;
        border: 1px solid red;
    }
    .statistic {
        float: right;
        margin-top: 10px;
    }
}
</style>
