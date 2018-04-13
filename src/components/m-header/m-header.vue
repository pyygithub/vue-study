<template>
  <div class="m-header" ref="top">
    <!-- logo文字 -->
    <div class="header-logo">
      <h1>Lambda</h1>
    </div>

    <!--导航列表-->
    <div class="header-nav-list">
      <ul>
        <router-link tag="li" to="/home"><span>首页</span></router-link>
        <router-link tag="li" to="/manageDesc"><span>功能介绍</span></router-link>
        <router-link tag="li" to="/contact"><span>社区</span></router-link>
        <router-link tag="li" to="/blog"><span>博客</span></router-link>
        <router-link tag="li" to="/chat"><span>聊天室</span></router-link>
      </ul>
      <div class="search-box">
        <i-input icon="search" placeholder="请输入..." style="width: 200px"></i-input>
      </div>
    </div>

    <!--用户信息-->
    <div class="header-info">
      <router-link tag="a" to="/login">登录</router-link>
      <router-link tag="a" to="/reg">注册</router-link>
    </div>
  </div>
</template>

<script>
  import commonUtil from '../../common/js/common-util'

  export default {
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {


    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/rest.css";

  .m-header {
    position: fixed;
    z-index: 9999;
    width: 100%;
    min-width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 30px;
    background: rgba(0,0,0,.7);
    .header-logo {
      flex-grow: 1;
      h1 {
        font-size: 28px;
        font-weight: bold;
        color: #fff;
      }
    }
    .header-nav-list {
      display: flex;
      justify-content: flex-end;
      flex-grow: 4;
      ul {
        display: flex;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          height: 64px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          padding: 0 20px;
          cursor: pointer;
        }
        .router-link-active {
          background: #000;
          opacity: .7;
        }
      }
      .search-box {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-left: 20px;
      }
    }
    .header-info {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 0 15px;
      }
    }
  }


</style>
