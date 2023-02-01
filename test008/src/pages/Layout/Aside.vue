<template>
  <div>
    <el-menu default-active="0" text-color="#fff" background-color="#304156" unique-opened="true" router class="el-menu-vertical-demo" :collapse="store.state.isCollapse" @open="handleOpen" @close="handleClose">
      <el-menu-item :route="{ path: '/'}" index="0">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <template #title>
          <span>首页</span>
        </template>
      </el-menu-item>
      <template v-for="item in store.state.userRouters" :key="item.id">

        <el-menu-item v-if="!item.children" :route="{ path: item.path}" :index="item.id">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <template #title>
            <span>{{item.title}}</span>
          </template>
        </el-menu-item>

        <el-sub-menu v-else :index="item.id" @click="open">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{item.title}}</span>
          </template>

          <el-menu-item-group v-for="chlien in item.children" :key="chlien.id">

            <el-menu-item :route="{ path: chlien.link}" :index="`${item.id}`+'-'+`${chlien.id}`">
              <el-icon>
                <component :is="chlien.icon" />
              </el-icon>{{chlien.title}}
            </el-menu-item>

          </el-menu-item-group>

        </el-sub-menu>
      </template>

    </el-menu>

  </div>
</template>

<script setup>
import store from '@/store/index'
import { useRouter } from 'vue-router'
const router = useRouter()

// <el-icon><Setting /></el-icon>
// <el-icon><Operation /></el-icon>
// <el-icon><HomeFilled /></el-icon>//首页
// <el-icon><Tools /></el-icon>
console.log('aside', store.state.userRouters);
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Tools,
  Setting,
  Operation,
} from "@element-plus/icons-vue";



// const isCollapse = ref(false);
const handleOpen = () => {
  console.log('store', store.state.isCollapse);
};
const handleClose = () => {
  console.log();
};
const log = (e) => {
  console.log(e);
}
// const routelink = (val) => {
//   console.log(val);
//   router.push({ path: val })
// }
const open = (e) => {
  // console.log(e);
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100vh;
  width: 200px;
  min-height: 400px;
}
.el-menu--collapse {
  height: 100vh;
}
</style>
