import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
  address: [],
  orderInfo: {},
};

const mutations = {
  USERADDRESS(state, address) {
    state.address = address;
  },
  ORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  },
};

const actions = {
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    console.log("rrrrr");
    console.log(result);
    if (result.code == 200) {
      commit("USERADDRESS", result.data);
    }
  },
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("ORDERINFO", result.data);
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
