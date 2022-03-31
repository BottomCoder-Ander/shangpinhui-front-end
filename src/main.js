import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "@/router";
import store from "@/store";

import "@/mock/mockServe";
import "swiper/css/swiper.css";
import { MessageBox } from "element-ui";
import VueLazyload from "vue-lazyload";

import "@/plugins/validate";
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Paginator from "@/components/Paginator";
import * as api from "@/api";
import lzygif from "@/assets/images/lazyload.gif";
Vue.use(VueLazyload, {
  //懒加载默认的图片
  loading: lzygif,
});
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Paginator.name, Paginator);
// 将其挂载在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus设置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$api = api;
  },
  router,
  store,
}).$mount("#app");
