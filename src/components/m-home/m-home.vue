<template>
  <div class="m-home">
    <!--banner栏-->
    <m-banner></m-banner>

    <!--分类列表导航-->
    <div class="category-list">
      <ul>
        <li @click="toggleCategory(tag)" :class="{active: tag.isActive}" v-for="(tag, index) in categoryTags" :key="index">{{tag.tagName}}</li>
      </ul>
    </div>



    <!--项目列表-->
    <div class="item-list">

      <!-- loading -->
      <loading v-show="!topicList.length"></loading>

      <div v-for="(item, index) in topicList" :key="index" class="item">
        <img v-lazy="item.imgSrc">
        <div class="thumbnail-caption">
          <h3 class="title">{{ item.title }}</h3>
          <p class="info">
            <span class="collectCount">{{ item.collectCount }}&nbsp; &nbsp;收录资源</span>
            &nbsp;|&nbsp;
            <span class="careCount">{{ item.careCount }}&nbsp; &nbsp;关注者</span>
          </p>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <div v-if="topicList.length" class="more">
      <button>加载更多</button>
    </div>
  </div>
</template>

<script>
  import Loading from '../loading/loading'
  import MBanner from '../m-banner/m-banner'
  import * as homeApi from '../../api/home'

  export default {
    data() {
      return {
        categoryTags: [], // 分类标签列表
        topicList: [],    // 首页主题项列表
      }
    },
    created() {
      this.getCategoryTags();
      this.findTopicList();
    },
    methods: {
      // 获取分类标签列表
      async getCategoryTags() {
        let ret = await homeApi.getTags();
        if(ret) {
          ret.data.sort((e1, e2) => e1.orderNo - e2.orderNo);
        }
        this.categoryTags = ret.data;
      },

      // 获取主题项列表
      async findTopicList() {
        let ret = await homeApi.getHomeTopic();
        this.topicList = ret.data;
      },

      // 切换选中该标签
      toggleCategory(tag) {
        this.categoryTags.map( (item) => {
          if(item == tag) {
            item.isActive = true;
          }else {
            item.isActive = false;
          }
        });
      },
    },
    components: {
      MBanner,
      Loading
    }
  }
</script>

<style scoped lang="less">

  /*分类导航列表*/
  .category-list {
    display: flex;
    margin: 30px 0;
    width: 100%;
    min-width: 1170px;
    justify-content: center;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      li {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 8px 12px;
        border: 1px solid #000;
        margin-right: 8px;
        font-size: 14px;
        cursor: pointer;
      }
      li.active {
        background: #3f444a;
        color: #fff;
      }
    }
  }

  /*项目列表*/
  .item-list {
    width: 1120px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap:wrap;
    .item {
      width: 360px;
      height: 370px;
      margin-bottom: 28px;
      padding: 2px;
      border: 1px solid #ccc;
      cursor: pointer;
      img {
        width: 354px;
        height: 206px;
      }
      .thumbnail-caption {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          margin: 5px;
          font-size: 30px;
        }
        .info {
          margin-bottom: 8px;
        }
        .desc {
          font-size: 12px;
          color: #666;
          margin: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }

  /*加载更多*/
  .more {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button {
      border: 1px solid #000;
      padding: 7px  15px;
      cursor: pointer;
    }
    button:hover {
      background: #2e3336;
      color: #fff;
    }
  }
</style>
