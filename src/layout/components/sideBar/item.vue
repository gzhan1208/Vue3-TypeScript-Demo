<script lang="ts">
import { defineProps } from "vue";

defineProps({
    name: {
        type: String,
        required: true
    },
})
</script>

<template>
    <el-icon>
        <slot name="icon"></slot>
    </el-icon>
    <span>{{ name }}</span>
</template>

<style scoped>

</style>
