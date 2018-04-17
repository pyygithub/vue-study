<template>
  <div id="app">
    <!--顶部导航-->
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>

  import MHeader from './components/m-header/m-header'
  import MFooter from './components/m-footer/m-footer'

  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      MHeader,
      MFooter
    }
  }
</script>

<style>

</style>
