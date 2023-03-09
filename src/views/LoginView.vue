<script setup lang="ts">
import InputItem from '../components/InputItem.vue'
</script>

<template>
  <div class="container">
    <div class="loginBox">
      <h3>Register With Us</h3>
      <InputItem>
        <template #label>
          Username
        </template>
      </InputItem>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
  justify-content: center;
}
</style>