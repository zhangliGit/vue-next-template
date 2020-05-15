<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">
      <span>返回</span>
      <span class="qui-fx-f1">详情</span>
    </div>
    <div class="qui-fx-f1"></div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Detail',
  components: {},
  setup() {
    const detail = reactive({
      id: 1,
      title: '',
      des: '',
      time: ''
    })
    return {
      detail
    }
  }
}
</script>
<style lang="less"></style>
