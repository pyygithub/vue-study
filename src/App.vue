<template>
  <div id="app">
    <!--顶部导航-->
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>

  import MHeader from './components/m-header/m-header'

  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      MHeader
    }
  }
</script>

<style>

</style>
