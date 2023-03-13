<script lang="ts">
import InputItem from '../components/InputItem.vue'
import { reactive } from 'vue';
interface InputData {
  [key: string]: string
}
export default {
  components: {
    InputItem,
  },
  setup() {
    const form = [
      { 
        label: 'Username',
        require: 'Username must be at least 3 characters',
        placeholder: 'Enter username',
      },
      { 
        label: 'Email',
        require: 'Email is not valid',
        placeholder: 'Enter email'
      },
      { 
        label: 'Password',
        require: 'Password must be at least 6 characters',
        placeholder: 'Enter password',
        type: 'password'
      },
      { 
        label: 'Confirm password',
        require: 'Password2 is required',
        placeholder: 'Enter password again',
        type: 'password'
      }
    ];
    const inputData: InputData = reactive({});
    const changeText = (k: string, v: any) => {
      inputData[k] = v.trim();
    }
    const submit = () => {
    }
    return {
      inputData,
      changeText,
      form,
      submit,
    }
  }
}

</script>

<template>
  <div class="container">
    <div class="loginBox">
      <h2>Register With Us</h2>
      <InputItem 
        v-for="item in form"
        :label="item.label"
        :key="item.label"
        :type="item.type"
        :placeholder="item.placeholder"
        @change="changeText"
      >
        <template #label>
          {{ item.label }}
        </template>
        <template #verify>
          {{ item.require }}
        </template>
      </InputItem>
      <input type="button" value="Submit" @click="submit" />
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
  border-radius: 4px;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
  /* color: #000000; */
  margin-bottom: 20px;
}
input {
  outline: none;
  border-color: transparent;
  border-radius: 4px;
  background-color: #3498DB;
  width: 100%;
  height: 45px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
}
</style>