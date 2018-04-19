<template>
  <div class="loading">
    <img width="44" height="44" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="less" >

  .loading {
    width: 100%;
    margin: 50px 0px;
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: 16px;
      color: #ccc;
    }
  }

</style>
