<template>
  <aside class="aside__top">
    <div class="aside__top--left">
      <el-icon @click="toggleNavCollapse" v-if="store.state.isCollapse">
        <Expand />
      </el-icon>

      <el-icon @click="toggleNavCollapse" v-else>
        <Fold />
      </el-icon>

    </div>

    <!-- <span class="iconfont icon-nav toggleNavCollapse" :class="{active:isSidebarNavCollapse}">
    </span> -->

    <div class="aside__top--right">
      <!-- <el-icon>
        <Message />
      </el-icon> -->
      <div @click="requestFullScreen">
        <el-icon>
          <FullScreen />
        </el-icon>
      </div>

      <div>
        <el-icon>
          <Message />
        </el-icon>
      </div>

      <div class="user-msg">
        <!-- <span class="user-name">iwen</span>
        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->

        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link user-name">
            iwen
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div>
        <el-icon @click="loginOut">
          <SwitchButton />
        </el-icon>
      </div>
    </div>
  </aside>
</template>

<script setup>
import screenfull from "screenfull";

import {
  Document,
  Menu as IconMenu,
  Message,
  SwitchButton,
  FullScreen,
  Expand,
  Fold
} from "@element-plus/icons-vue";



// import { mapState } from 'vuex';
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例
// console.log(store)  // store 实例对象


const toggleNavCollapse = () => {
  // mapState()
  store.commit('toggleNavCollapse')
  // commit('mapState')
}
const loginOut = () => {

}

const Fullscreen = () => {
  store.commit('Fullscreen')

}
const requestFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}



</script>

<style lang="less" scoped>
.aside__top {
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  // background: rgb(144, 136, 136);
  border-bottom: 1px solid #ccc;
  align-items: center;

  .aside__top--left {
    left: 10px;
    top: 2px;
    bottom: 0px;
    font-size: 20px;
    padding: 0 15px;
  }
  .aside__top--right {
    right: 10px;
    top: -1px;
    bottom: 0px;
    font-size: 20px;
    > div {
      position: relative;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      padding: 0 15px;
      cursor: pointer;
      &:hover::after {
        transform-origin: 0 0;
        transform: scaleX(1);
      }
      &:first-child:before {
        border: none;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ef4747;
        transform: scaleX(0);
        transform-origin: right 0;
        transition: transform 0.5s;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        top: 50%;
        left: -8px;
        margin-top: -13px;
        border-left: 1px solid #ccc;
      }

      &.user-msg {
        // .el-dropdown-link::v-deep {
        //   font-size: 20px;
        //   margin-top: 10px;

        .el-dropdown-link::v-deep {
          cursor: pointer;
          color: var(--el-color-primary);
          display: flex;
          font-size: 20px;
          margin-top: 10px;
          align-items: center;
        }
        // padding: 0;
        //   display: flex;
        // }
        .user-img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-name {
          color: #758eb5;
          padding: 0 4px;
        }
      }
      .iconfont {
        position: relative;
        font-size: 24px;
        color: #758eb5;
      }
    }
  }
}
</style>
