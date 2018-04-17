<template>
  <div class="m-footer">
    <div class="container">
      <Row>
        <Col span="8">
          <h3 class="f-title">LAMBDA</h3>
          <ul class="f-item-list">
            <li><router-link to="/home" tag="a">关于lanbda</router-link></li>
            <li><router-link to="/home" tag="a">社区</router-link></li>
            <li><router-link to="/home" tag="a">博客</router-link></li>
          </ul>
        </Col>

        <Col span="8">
        <h3 class="f-title">友情链接</h3>
        <ul class="f-item-list">
          <li><router-link to="/home" tag="a">廖雪峰的官方博客</router-link></li>
          <li><router-link to="/home" tag="a">阮一峰的个人博客</router-link></li>
          <li><router-link to="/home" tag="a"></router-link></li>
        </ul>
        </Col>

        <Col span="8">
        <h3 class="f-title">联系方式</h3>
        <ul class="f-item-list">
          <li><router-link to="/home" tag="a">QQ: 653183478</router-link></li>
          <li><router-link to="/home" tag="a">微信: panyangyang07</router-link></li>
        </ul>
        </Col>
      </Row>

      <div class="declaration">
        <p>申明：本站资源全部来自与互联网，如果发现本站有侵权行为，请告知，我们会在第一时间处理</p>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        Copyright © 2018 Lambda<a href="">沪ICP备16045677号</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
  @import "../../common/css/rest.css";

  .m-footer {
    background-color: #2e3336;
    .container {
      padding: 30px 20px;
    }
    .f-title {
      display: flex;
      align-items: center;
      height: 40px;
      font-size: 20px;
      font-weight: bold;
      color: #d5dfe5;
    }
    .f-item-list {
      li {
        display: flex;
        align-items: center;
        height: 30px;
        a {
          color:#a9bdcb;
        }
      }
    }
    .declaration {
      color:#fff;
      font-size: 14px;
    }
    .copyright {
      height: 80px;
      background: #31383c;
      color:#fff;
      font-size: 14px;
      display: flex;
      align-items: center;

      a {
        color: #fff;
      }
    }
  }



</style>
