import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "@/router";
import store from "@/store";

import "@/mock/mockServe";
import "swiper/css/swiper.css";

import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Paginator from "@/components/Paginator";
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Paginator.name, Paginator);

new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus设置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount("#app");
