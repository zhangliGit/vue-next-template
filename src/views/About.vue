<template>
  <div>
    <span>count is {{ count }}</span>
    <span>plusOne is {{ plusOne }}</span>
    <button @click="increment">count++</button>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() {
    // reactive state
    const count = ref(0)
    // computed state
    const plusOne = computed(() => count.value + 1)
    // method
    const increment = () => {
      count.value++
    }
    // watch
    watch(
      () => count.value * 2,
      val => {
        console.log(`count * 2 is ${val}`)
      }
    )
    // lifecycle
    onMounted(() => {
      console.log(`mounted`)
    })
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    }
  }
}
</script>

作者：黄子毅 链接：https://juejin.im/post/5d1955e3e51d4556d86c7b09 来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
