<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">
      <span @click="goBack">返回</span>
      <span class="qui-fx-f1 qui-fx-jc">详情</span>
    </div>
    <div class="qui-fx-f1"></div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue'
export default {
  name: 'Detail',
  components: {},
  setup() {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value.query)
    const detail = reactive({
      id: 1,
      title: '',
      des: '',
      time: ''
    })
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
