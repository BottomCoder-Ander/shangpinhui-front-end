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
// 简化仓具中数据获取
const getters = {
  goodsList(state) {
    // 或上一个[]，当数据还没回来时返回空数组，而不是undefined
    return state.searchInfo.goodsList || [];
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || [];
  },
  attrsList(state) {
    return state.searchInfo.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
