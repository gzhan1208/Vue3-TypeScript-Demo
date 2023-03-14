<script lang="ts">
import { useRoute } from 'vue-router';

export default {
    name: 'SideBar',
    setup() {
        const route = useRoute;
        return {
            route
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="logo">
            <span>Vue3 管理后台</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    /* padding: 0 15px; */
}
.logo {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 75px;
    align-items: center;
    border-bottom: 1px solid #666;
}
.logo span {
    font-size: 1.5rem;
}

</style>