import Mock from "mockjs";
// json直接引就可以了
//webpack默认堆外暴露的：图片、json数据格式
import banner from "./banners.json";
import floor from "./floors.json";

//第一个参数时请求地址，第二个参数是请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
