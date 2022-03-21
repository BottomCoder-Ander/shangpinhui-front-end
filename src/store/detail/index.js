import { reqGetGoodInfo, reqAddorUpdateShopCart } from "@/api";
const state = {
  goodInfo: {},
};

const mutations = {
  GOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};

const actions = {
  // 获取产品信息
  async goodInfo({ commit }, skuId) {
    let result = await reqGetGoodInfo(skuId);
    if (result.code == 200) {
      commit("GOODINFO", result.data);
    }
  },
  // 产品添加到购物车中
  // async 返回值为Promise， promise的结果为async函数的返回值决定，返回一个普通字符串表示成功
  async AddorUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddorUpdateShopCart(skuId, skuNum);
    if (result == 200) {
      return "ok";
    }
    return Promise.reject(new Error("failed"));
  },
};

const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
