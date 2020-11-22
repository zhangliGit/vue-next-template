<template>
  <div>
    <span>我是子组件</span>
    {{ foo }}
    {{ zoo }}
    <div>{{ title }}</div>
    <span>{{ newInfo }}</span>
    <div @click="$emit('update:foo', '123'), $emit('update:zoo', '123')">
      change
    </div>
  </div>
</template>
<script>
import { inject, computed } from 'vue'
export default {
  props: {
    info: String,
    foo: String,
    zoo: String
  },
  setup(props, { emit }) {
    const title = inject('title')
    const newInfo = computed({
      get: () => props.info,
      set: value => emit('change', value)
    })
    const change = () => {
      console.log(3)
      newInfo.value = '123'
    }
    return {
      title,
      change,
      newInfo
    }
  }
}
</script>
<style scoped></style>
