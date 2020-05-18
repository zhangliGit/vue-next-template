<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc" style="padding: 0 10px">
      <div @click="goBack">&lt; 返回</div>
      <div class="qui-fx-f1 qui-tx-c">{{ title }}</div>
    </div>
    <div class="qui-fx-ac qui-fx-jsb" style="background: #ccc; padding:0 10px">
      <div>
        <p>标题：<input type="text" v-model="form.title" /></p>
        <p>内容：<input type="text" v-model="form.content" /></p>
      </div>
      <p
        @click="add"
        style="width: 80px; height: 30px; background: #666; border-radius: 4px; text-align: center; line-height: 30px; color:#fff;"
      >
        录入
      </p>
    </div>
    <div class="qui-fx-f1">
      <div @click="goPath(data)" class="list" v-for="data in dataList" :key="data.id">
        <div style="font-weight: bold; font-size: 18px">{{ data.title }}</div>
        <div style="color:#666">{{ data.content }}</div>
        <div style="color:#666">{{ data.createTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, watch, provide, computed } from 'vue'
export default {
  name: 'List',
  components: {},
  setup() {
    console.log('list')
    const count = ref(0)
    // 获取当前路由实例
    const { ctx } = getCurrentInstance()
    const title = ctx.$router.currentRoute.value.query.title
    const form = reactive({
      title: '',
      content: ''
    })
    const dataList = reactive([])
    watch(
      () => count.value,
      val => {
        console.log(`count is ${val}`)
      }
    )
    const newD = computed(() => 2)
    const add = () => {
      if (form.title === '' || form.content === '') {
        alert('请输入内容')
        return
      }
      dataList.push({
        ...form,
        createTime: new Date().getTime()
      })
    }
    const goPath = item => {
      provide('detail', 'haha')
      ctx.$router.push({
        name: 'Detail',
        params: item
      })
    }
    const goBack = () => {
      ctx.$router.back()
    }
    return {
      title,
      dataList,
      add,
      form,
      goPath,
      newD,
      count,
      goBack
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 2.2rem;
  font-size: 16px;
  font-weight: bold;
  background-color: cornflowerblue;
  color: #fff;
}
input {
  height: 30px;
  margin: 5px 0;
}
.list {
  padding: 0.5rem;
  line-height: 1.2rem;
  border-bottom: 1px #ccc solid;
}
</style>
