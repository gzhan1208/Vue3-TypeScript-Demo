<script setup lang="ts">

defineProps<{
  placeholder: string
}>()
</script>
<template>
  <div class="item">
    <label>
      <slot name="label"></slot>
    </label>
    <input :placeholder="placeholder" />
    <small>
      <slot name="verify"></slot>
    </small>
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 10px;
}
label {
  color: #666666;
  display: block;
  margin-bottom: 5px;
}
small {
  color: #e74c3c;
}
input {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #f0f0f0;
  padding: 5px 10px;
  outline-style: none;
}
input:focus {
  border-color: #666666;
}
</style>