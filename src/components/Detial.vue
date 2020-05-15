<template>
  <div class="detail">
    <!-- <p>姓名：{{ item.name || '' }}</p>
    <p>年龄：{{ item.age || '' }}</p>
    <p>性别：{{ item.sex || '' }}</p>
    <p>手机号：{{ item.phone || '' }}</p>-->
  </div>
</template>

<script>
import { reactive, inject } from 'vue'
export default {
  name: 'Detail',
  setup(props, context) {
    console.log(props, context)
    const detail = reactive(inject('detail'))
    console.log(detail)
    return {
      detail
    }
  }
}
</script>

<style scoped>
.detail {
  padding: 20px;
  background: #ccc;
}
</style>
