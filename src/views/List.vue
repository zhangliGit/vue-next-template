<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">分类列表</div>
    <div class="qui-fx-f1">
      <div class="type-list" v-for="data in dataList" :key="data.id">
        <span>{{ data.title }}</span>
        <span>{{ data.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'List',
  components: {},
  setup() {
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
        id: 4,
        title: 'webpack'
      }
    ])
    return {
      dataList
    }
  }
}
</script>
<style lang="less">
.header {
  height: 2.2rem;
  font-size: 16px;
  font-weight: bold;
  background-color: cornflowerblue;
  color: #fff;
}
.type-list {
  line-height: 2.2rem;
  height: 2.2rem;
  border-bottom: 1px #ccc solid;
}
</style>
