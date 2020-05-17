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
  setup(props, ctx) {
      console.log(props, ctx)
  }
}
</script>
<style>
</style>
