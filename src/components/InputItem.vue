<script setup lang="ts">

</script>
<template>
  <div class="item">
    <label>
      <slot name="label"></slot>
    </label>
    <div class="input">
      <input />
    </div>
    <small>
      <slot name="verify"></slot>
    </small>
  </div>
</template>

<style scoped>
.item {

}
small {
  color: #e74c3c;
}
</style>