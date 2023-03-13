<script lang="ts">
import { watch, ref } from 'vue';
export default {
  props: {
    placeholder: String,
    label: String,
    type: String,
  },
  emits: ['change'],
  setup(props, context) {
    const input = ref('');
    const showRequire = ref(false);
    const checkLength = (v: string, min: number = 3, max: number = 8) => {
      const len = v.length;
      return !(len > min && len < max);
    }
    const checkName = (val: string) => {
      showRequire.value = checkLength(val, 3, 12);
    };
    const checkEmail = (val: string) => {
      const re = /^[A-Za-z\d]+([-_\\.][A-Za-z\d]+)*@([A-Za-z\d]+[-\\.])+[A-Za-z\d]{2,4}(,[A-Za-z\d]+([-_\\.][A-Za-z\d]+)*@([A-Za-z\d]+[-\\.])+[A-Za-z\d]{2,4})*$/;
      showRequire.value = !re.test(val);
    };
    const checkPassword = (val: string) => {};
    const checkConfirmPassword = (val: string) => {};
    watch(input, (nv, ov) => {
      context.emit('change', props.label, nv);
    })
    const checkRequired = () => {
      const v = input.value.trim();
      if (v) {
        const label = props.label;
        switch(label) {
          case 'Username':
            checkName(v);
            break;
          case 'Email':
            checkEmail(v);
            break;
          case 'Password':
            checkPassword(v);
            break;
          case 'Confirm password':
            checkConfirmPassword(v);
            break;
          default:
          showRequire.value = false;
        }
      } else showRequire.value = true;
    };
    return {
      input,
      showRequire,
      checkRequired,
    }
  }
}
</script>
<template>
  <div class="item">
    <label>
      <slot name="label"></slot>
    </label>
    <input :placeholder="placeholder" :type="type" v-model="input" :class="{ inputRequire: showRequire }" @blur="checkRequired" />
    <small v-show="showRequire">
      <slot name="verify"></slot>
    </small>
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 10px;
  padding-bottom: 20px;
}
label {
  color: #666666;
  display: block;
  margin-bottom: 5px;
}
small {
  color: #e74c3c;
  display: block;
  height: 0;
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
.inputRequire {
  border-color: #e74c3c;
}
</style>