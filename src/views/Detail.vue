<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc" style="padding: 0 10px">
      <div @click="goBack">&lt; 返回</div>
      <div class="qui-fx-f1 qui-tx-c">详情</div>
    </div>
    <div class="qui-fx-f1" style="padding: 20px">
      <div style="font-weight: bold; font-size: 18px">{{ detail.title }}</div>
      <div style="color:#666; padding: 10px 0; line-height: 24px;">{{ detail.content }}</div>
      <div>{{ detail.createTime }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue'
export default {
  name: 'Detail',
  components: {},
  setup() {
    console.log('detail')
    const { ctx } = getCurrentInstance()
    const detail = reactive(ctx.$router.currentRoute.value.params)
    const goBack = () => {
      ctx.$router.back()
    }
    return {
      detail,
      goBack
    }
  }
}
</script>
<style lang="less"></style>
