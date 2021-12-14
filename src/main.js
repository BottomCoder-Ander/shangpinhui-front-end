import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "@/router";
import store from "@/store";

import "@/mock/mockServe";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
