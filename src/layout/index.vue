<script lang="ts">
import SideBar from './components/SideBar.vue'
export default {
    name: 'layout-index',
    components: {
        SideBar
    },
    setup() {}
}
</script>

<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <div class="top">
                <div class="box">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%
}
.left {
    position: fixed;
    width: 249px;
    height: 100%;
    border-right: 1px solid var(--color-background-grey-1);
}
.right {
    margin-left: 250px;
    min-height: 100%;
    background-color: red;
}
.top {
    width: 100%;
    height: 1880px;
}
.box {
    width: 500px;
    height: 200px;
    background-color: black;
}
</style>