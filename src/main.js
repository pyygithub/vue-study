// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523627286825&di=e5970e5391a7565b7088679cfae8658b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01280157e1e2f80000012e7e81b798.gif',
})

Vue.use(iView);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
