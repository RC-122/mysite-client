import "./mock"

import Vue from 'vue';
import App from './App.vue';
import "./style/global.less";
import router from './router';
import Message from './utils/Message';
import "./EventBus";
import store from "@/store"
store.dispatch("setting/fetchSetting")

Vue.prototype.$Message = Message;

//全局指令注册
import vLoading from "@/directives/loading";
import vLazy from "@/directives/lazy"
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')




