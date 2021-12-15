// API 统一管理

import requests from "./request";
import mockReuests from "/.mockRequest";

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
export const reqGetBannerList = () => mockReuests.get("/banner");
export const reqGetFloorList = () => mockReuests.get("/floor");
