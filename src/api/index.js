// API 统一管理

import requests from "./request";
import mockReuests from "./mockRequest";

/*
 * 三级联动接口
 * api/product/getBaseCategoryList
 * method: get
 * params: 无
 * 返回： axios请求返回结果，Promise对象
 */
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

/**
 * 获取banner(Home首页轮播图)
 */
export const reqBannerList = () => mockReuests.get("/banner");
/**
 * 获取Floor数据
 */
export const reqFloorList = () => mockReuests.get("/floor");
/**
 * 获取搜索模块数据，请求方式post
 * 参数：全都是可选参数
 * category1Id,category2Id,category3Id
 * categoryName
 * keyword
 * pageNo
 * pageSize
 * props:[],
 * trademark
 */
export const reqSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取产品详情的接口
export const reqGetGoodInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中，或者更新某一个产品的个数
export const reqAddorUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

//用户注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });

//登录
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "post" });

// 带着token向服务器获取用户信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqUserLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });
