/* * @Author: mikey.zhaopeng * @Date: 2020-11-22 20:58:58 * @Last Modified by: mikey.zhaopeng * @Last Modified time: 2020-11-22 20:58:58 */

<template>
  <div class="qui-page qui-fx-ver">
    <div class="header qui-fx-ac qui-fx-jc">Vue3.0Demo</div>
    <div class="qui-fx-f1">
      <tip :msg="msg"></tip>
      <div @click="goPath(data)" class="type-list" v-for="data in dataList.list" :key="data.id">
        {{ data.title }}
      </div>
    </div>
    <div style="padding:20px; background: #fff; text-indent: 20px; background-size: 100%"></div>
    <div></div>
    <span></span>
    <child :info="info" @change="add" v-model:foo="foo" v-model:zoo="zoo"></child>
    <div></div>
    <div></div>
    <div>{{ count.total }}</div>
    <div @click="add">新增</div>
    <div class="header" ref="myRef">1212</div>
    <div @click="update">更新</div>
    <div></div>
    <div class="header"></div>
    <div class="tag"></div>
  </div>
</template>

<script>
import Child from '../components/Child'
import { ref, reactive, provide, watch, getCurrentInstance, onMounted, onUpdated, onUnmounted, onErrorCaptured } from 'vue'
import Tip from './Tip.vue'
export default {
  name: 'Home',
  components: { Tip, Child },
  setup() {
    console.log('home')
    const { ctx } = getCurrentInstance()
    const myRef = ref(null)
    const msg = ref('前端开发知识点')
    const info = ref('我是info')
    const zoo = ref('zoo')
    const foo = ref('我是type')
    const count = ref({
      total: 0
    })
    setTimeout(() => {
      console.log(myRef.value)
    }, 2000)
    watch(count, (count, old) => {
      console.log(2)
      console.log(count, old)
    })
    provide('title', '你是自组建')
    const dataList = reactive({
      list: [
        {
          id: 1,
          title: 'vue'
        },
        {
          id: 2,
          title: 'react'
        }
      ],
      test: []
    })
    // methods方法
    const goPath = data => {
      ctx.$router.push({
        path: '/list',
        query: {
          title: data.title
        }
      })
    }
    const add = () => {
      info.value = 'haha'
      count.value = {
        total: 2
      }
    }
    const update = () => {
      dataList.list = [
        {
          title: 'helleo'
        }
      ]
    }
    // 生命周期
    onMounted(() => {
      console.log('加载完成...')
    })
    onUpdated(() => {
      console.log('更新前...')
    })
    onUnmounted(() => {
      console.log('卸载后...')
    })
    onErrorCaptured(() => {
      console.log('错误处理...')
    })
    return {
      myRef,
      dataList,
      goPath,
      msg,
      count,
      add,
      update,
      info,
      foo,
      zoo
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
  background: #f5f5f5;
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
  margin: 20px;
  padding: 20px;
  text-indent: 20px;
}
</style>
