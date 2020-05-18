<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">Vue3.0Demo</div>
    <div class="qui-fx-f1">
      <tip :msg="msg"></tip>
      <div @click="goPath(data)" class="type-list" v-for="data in dataList" :key="data.id">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import Tip from './Tip.vue'
export default {
  name: 'Home',
  components: { Tip },
  setup() {
    console.log('home')
    const { ctx } = getCurrentInstance()
    const msg = ref('前端开发知识点')
    const dataList = reactive([
      {
        id: 1,
        title: 'vue'
      },
      {
        id: 2,
        title: 'react'
      },
      {
        id: 3,
        title: 'javascript'
      },
      {
        id: 5,
        title: 'webpack'
      },
      {
        id: 6,
        title: 'node'
      },
      {
        id: 7,
        title: 'nginx'
      }
    ])
    // methods方法
    const goPath = data => {
      ctx.$router.push({
        path: '/list',
        query: {
          title: data.title
        }
      })
    }
    return {
      dataList,
      goPath,
      msg
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
.type-list {
  width: 22.5%;
  margin-left: 2%;
  line-height: 2.2rem;
  float: left;
  height: 2.2rem;
  text-align: center;
  border: 1px #f5f5f5 solid;
  background-color: #666;
  border-radius: 4px;
  margin-top: 10px;
  color: #fff;
}
</style>
