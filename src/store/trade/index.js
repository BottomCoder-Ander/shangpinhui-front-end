import { reqAddressInfo } from "@/api";

const state = {
  address: [],
};

const mutations = {
  USERADDRESS(state, address) {
    state.address = address;
  },
};

const actions = {
  async getuserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("USERADDRESS", result.data);
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
