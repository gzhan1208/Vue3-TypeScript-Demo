<script setup lang="ts">
import InputItem from '../components/InputItem.vue'

</script>

<template>
  <div class="container">
    <div class="loginBox">
      <h2>Register With Us</h2>
      <InputItem placeholder="Enter username">
        <template #label>
          Username
        </template>
        <template #verify>
          Username must be at least 3 characters
        </template>
      </InputItem>
      <InputItem placeholder="Enter email">
        <template #label>
          Email
        </template>
        <template #verify>
          Email is not valid
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
  padding: 30px;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
  /* color: #000000; */
  margin-bottom: 20px;
}
</style>