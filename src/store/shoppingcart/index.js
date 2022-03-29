import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
  cartList: [],
};

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};

const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartListBySkuId(commit, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else return Promise.reject(new Error("删除失败，" + result.message));
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("改变选中状态失败，" + result.message));
    }
  },
  // 删除所有勾选的商品
  async deleteAllCheckedCart({ dispatch, getters }) {
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId)
          : "";
      //将每一次返回的Promise添加到数组当中
      promiseAll.push(promise);
    });
    //只要全部的p1|p2..都成功，返回结果即为成功
    return promise.all(promiseAll);
  },
  async updateAllCartChecked({ getters, dispatch }, isChecked) {
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};

const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
