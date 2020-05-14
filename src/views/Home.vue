<template>
  <div class="home">
    <div class="add" @click="add">新增</div>
    <div>姓名：<input type="text" v-model="state.form.name" /></div>
    <div>年龄：<input type="text" v-model="state.form.age" /></div>
    <div>性别：<input type="text" v-model="state.form.sex" /></div>
    <div>电话号码：<input type="text" v-model="state.form.phone" /></div>
    <div style="overflow: hidden">
      <ul class="ul-list">
        <li>姓名</li>
        <li>年龄</li>
        <li>性别</li>
        <li>电话号码</li>
        <li>操作</li>
      </ul>
    </div>
    <div style="overflow: hidden" v-for="(list, index) in state.dataList" :key="index">
      <ul class="ul-list">
        <li>{{ list.name }}</li>
        <li>{{ list.age }}</li>
        <li>{{ list.sex }}</li>
        <li>{{ list.phone }}</li>
        <li>
          <span @click="del(list.id)">删除</span>
          <span>查看</span>
        </li>
      </ul>
    </div>
    <detail :item="total"></detail>
  </div>
</template>

<script>
import Detail from '../components/Detial'
import { ref, reactive, onMounted, provide } from 'vue'
export default {
  name: 'Home',
  components: {
    Detail
  },
  setup() {
    const total = ref(0)
    const title = ref('zhangli')
    let detail = reactive({})
    provide('detail', 'hello')
    const state = reactive({
      form: {
        name: '',
        sex: '',
        age: '',
        phone: ''
      },
      dataList: [
        {
          id: 1,
          name: '12',
          age: '3',
          sex: 1,
          phone: '18702707106'
        }
      ]
    })
    const del = id => {
      state.dataList.splice(
        state.dataList.findIndex(item => item.id === id),
        1
      )
    }
    const add = () => {
      const form = JSON.parse(JSON.stringify(state.form))
      state.dataList.push({ ...form, id: Math.random() * 1000 })
    }
    onMounted(() => {
      detail = state.dataList[0]
    })
    return {
      detail,
      total,
      title,
      state,
      add,
      del
    }
  }
}
</script>
<style>
.ul-list {
  list-style: none;
}
.add {
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: #ccc;
}
.del {
  width: 50px;
  height: 40px;
  background-color: red;
  color: #fff;
  cursor: pointer;
}
.ul-list li {
  float: left;
  width: 200px;
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
  border: 1px #ccc solid;
}
</style>
