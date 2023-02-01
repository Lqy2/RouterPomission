<template>
  <div class="main-container">
    <TopAside />
    <Content />
  </div>
</template>

<script>
import TopAside from './top.vue'
import Content from './content.vue'

export default {
  data () {
    return {}
  },
  computed: {
  },
  components: {
    TopAside,
    Content
  }
}
</script>
<style lang="less" scoped>
.main-container {
  width: 100vw;
}
</style>
