import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";
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

let router = new VueRouter({
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return { y: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  console.log("token = " + token);
  // 未登录
  if (!token) {
    console.log("Next");
    next();
    return;
  }

  // 已经登录过
  if (to.path == "/login") {
    next("/home");
  } else if (name) {
    next();
  } else {
    //没有用户信息，派发action让仓库存储用户信息在跳转try
    //获取用户信息成功
    try {
      await store.dispatch("getUserInfo");
      next();
    } catch (error) {
      //token失效了获取不到用户信息，从新登录, 清除token。没有必要dispatch
      // await store.dispatch('userLogout');
      removeLoginToken();
      next("/login");
    }
  }
});

export default router;
