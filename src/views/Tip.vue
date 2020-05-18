<template>
  <div class="tip">
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  setup() {}
}
</script>
<style scoped>
.tip {
  height: 2rem;
  padding: 0.4rem;
  background-color: #ccc;
}
</style>
