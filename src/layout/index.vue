<script lang="ts">
import { useRoute } from 'vue-router'
import SideBar from './components/SideBar.vue'
import BreadCrumb from './components/breadCrumb/index.vue'
import TabView from './components/tabView/index.vue'
export default {
    name: 'layout-index',
    components: {
        SideBar,
        BreadCrumb,
        TabView,
    },
    setup() {
        const route = useRoute()
        const key = () => {
            return route.path
        }
        return {
            key
        }
    }
}
</script>

<template>
    <div class="container">
        <SideBar />
        <div class="content">
            <BreadCrumb />
            <TabView />
            <section class="app-main">
                <transition
                    name="fade-transform"
                    mode="out-in"
                >
                    <router-view :key="key" />
                </transition>
            </section>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%
}
.content {
    margin-left: 250px;
    min-height: calc(100vh - 50px);
}
.app-main {
    width: 100%;
    padding: 0 15px;
    position: relative;
    overflow: hidden;
}
</style>
