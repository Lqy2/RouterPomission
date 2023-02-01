<template>
  <div>
    <el-container class="mycontainer">
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <MainContent />
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Aside from './Aside.vue'
import MainContent from './main-content/index.vue'
</script>

<style lang="less" scoped>
.mycontainer {
  width: 100vw;
  height: 100vh;
  .el-aside {
    // background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>