// 路由配置信息
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShoppingCart from "@/views/ShoppingCart";
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: {
      footer_show: true,
    },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: {
      footer_show: true,
    },
  },
  {
    name: "Detail",
    path: "/detail/:skuid",
    component: Detail,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      footer_show: false,
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      footer_show: true,
    },
  },
  {
    path: "/shoppingcart",
    component: ShoppingCart,
    meta: {
      footer_show: true,
    },
  },
];
