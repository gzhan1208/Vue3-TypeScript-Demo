<script lang="ts">
import { useRoute } from 'vue-router'
import SideBar from './components/SideBar.vue'
import BreadCrumb from './components/breadCrumb/index.vue'
export default {
    name: 'layout-index',
    components: {
        SideBar,
        BreadCrumb,
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
        <div class="side-bar">
            <SideBar />
        </div>
        <div class="content">
            <div>
                <BreadCrumb />
            </div>
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
.side-bar {
    position: fixed;
    width: 249px;
    height: 100%;
    border-right: 1px solid var(--color-background-grey-1);
}
.content {
    margin-left: 250px;
    /* 250 + navbar(17)*/
    width: calc(100vw - 267px);
    min-height: calc(100vh - 50px);
}
.app-main {
    /* 50= navbar  50  */
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>
