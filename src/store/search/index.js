//search 小仓库
import { reqSearchInfo } from "@/api";
const state = {
  searchInfo: {},
};

const mutations = {
  SEARCHINFO(state, searchInfo) {
    data.searchInfo = searchInfo;
  },
};

const actions = {
  async searchInfo(mutation, params) {
    let result = await reqSearchInfo(params);
    if (result.code == 200) {
      mutation.commit("SEARCHINFO", result.data);
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
