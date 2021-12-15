// home模块小仓库
import { reqCategoryList, reqGetBannerList } from "@/api";
const state = {
  // state中的初始值类型，应当时服务器返回的数据类型
  categoryList: [],
  bannerList: [],
};

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};

const actions = {
  // 通过API面的接口函数获取数据
  async categoryList(mutation) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      mutation.commit("CATEGORYLIST", result.data);
    }
  },
  async bannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("BANNERLIST", result.data);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
