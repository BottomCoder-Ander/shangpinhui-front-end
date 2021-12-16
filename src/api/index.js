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
