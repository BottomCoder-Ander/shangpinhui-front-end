// 路由配置信息
// import Home from "@/views/Home";
// import Search from "@/views/Search";
// import Login from "@/views/Login";
// import Register from "@/views/Register";
// import Detail from "@/views/Detail";
// import AddCartSuccess from "@/views/AddCartSuccess";
// import ShoppingCart from "@/views/ShoppingCart";
// import Trade from "@/views/Trade";
// import Pay from "@/views/Pay";
// import PaySuccess from "@/views/PaySuccess";
// import Center from "@/views/Center";
// import MyOrder from "@/views/Center/MyOrder";
// import GroupOrder from "@/views/Center/GroupOrder";
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    // component: Home
    component: () => import("@/views/Home"),
    meta: {
      footer_show: true,
    },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: () => import("@/views/Search"),
    meta: {
      footer_show: true,
    },
  },
  {
    name: "Detail",
    path: "/detail/:skuid",
    component: () => import("@/views/Detail"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login"),
    meta: {
      footer_show: false,
    },
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/Register"),
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: () => import("@/views/AddCartSuccess"),
    meta: {
      footer_show: true,
    },
    beforeEnter(to, from, next) {
      // 得到当前路由信息对象
      // const route = router.currentRoute  // route就是from
      if (
        from.path !== "/addcartsuccess" &&
        from.path.indexOf("/detail") != 0
      ) {
        next("/");
        return;
      }
      // 得到要跳转到目路由的query参数
      const skuNum = to.query.skuNum;
      // 读取保存的数据
      const skuInfo = JSON.parse(window.sessionStorage.getItem("SKUINFO"));
      console.log("---", skuNum, skuInfo);
      // 只有都存在, 才放行
      if (skuNum && skuInfo) {
        next();
      } else {
        // 在组件对象创建前强制跳转到首页
        next("/");
      }
    },
  },
  {
    path: "/shoppingcart",
    component: () => import("@/views/ShoppingCart"),
    meta: {
      footer_show: true,
    },
  },
  {
    path: "/trade",
    component: () => import("@/views/Trade"),
    meta: {
      footer_show: true,
    },
    beforeEnter(to, from, next) {
      if (from.path === "/shoppingcart" || from.path == "trade") {
        next();
      } else {
        next("/shoppingcart");
      }
    },
  },
  {
    path: "/pay",
    component: () => import("@/views/Pay"),
    meta: {
      footer_show: true,
    },
    beforeEnter(to, from, next) {
      if (from.path === "/trade" || from.path == "/pay") {
        next();
      } else {
        next("/trade");
      }
    },
  },
  {
    path: "/paysuccess",
    component: () => import("@/views/PaySuccess"),
    meta: {
      footer_show: true,
    },
    beforeEnter(to, from, next) {
      if (from.path === "/pay" || from.path == "/paysuccess") {
        next();
      } else {
        next("/pay");
      }
    },
  },
  {
    path: "/center",
    component: () => import("@/views/Center"),
    meta: {
      footer_show: true,
    },
    children: [
      {
        path: "/center/grouporder",
        component: () => import("@/views/Center/GroupOrder"),
      },
      {
        path: "myorder",
        component: () => import("@/views/Center/MyOrder"),
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/communication",
    component: () => import("@/views/Communication/Communication"),
    children: [
      {
        path: "event",
        component: () => import("@/views/Communication/EventTest/EventTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "model",
        component: () => import("@/views/Communication/ModelTest/ModelTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "sync",
        component: () => import("@/views/Communication/SyncTest/SyncTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "attrs-listeners",
        component: () =>
          import("@/views/Communication/AttrsListenersTest/AttrsListenersTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "children-parent",
        component: () =>
          import("@/views/Communication/ChildrenParentTest/ChildrenParentTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/views/Communication/ScopeSlotTest/ScopeSlotTest"),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];
