<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">分类列表</div>
    <div>
      <input type="text" v-model="form.title">
      <input type="text" v-model="form.time">
      <span @click="add">新增</span>{{ newD }}
    </div>
    <div class="qui-fx-f1">
      <div @click="goPath" class="list qui-fx-jsb" v-for="data in dataList" :key="data.id">
        <span>{{ data.title }}</span>
        <span>{{ data.time }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {ref, reactive, getCurrentInstance, watch, provide, computed } from 'vue'
export default {
  name: 'List',
  components: {},
  setup() {
    const count = ref(0)
    const { ctx } = getCurrentInstance()
    const form = reactive({
      title: '',
      time: ''
    })
    const dataList = reactive([])
    watch(() => count.value, val => {
      console.log(`count is ${val}`)
    })
    const newD = computed(() => 2)
    const add = () => {
      dataList.push({
        ...form
      })
    }
    const goPath = () => {
      provide('detail', 'haha')
      ctx.$router.push({
        path: '/detail',
        query: {
          title: 'haha'
        }
      })
    }
    return {
      dataList,
      add,
      form,
      goPath,
      newD,
      count
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
.list {
  line-height: 2.2rem;
  height: 2.2rem;
  border-bottom: 1px #ccc solid;
}
</style>
