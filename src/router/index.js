import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

let OriginalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    OriginalPush.call(this, location, resolve, reject);
  } else {
    OriginalPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return { y: 0 };
  },
});
