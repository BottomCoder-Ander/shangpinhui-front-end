import {
  reqGetCode,
  reqUserInfo,
  reqUserLogin,
  reqUserLogout,
  reqUserRegister,
} from "@/api";
import { getLoginToken, removeLoginToken, setLoginToken } from "@/utils/token";

const state = {
  code: "",
  token: getLoginToken(),
  userInfo: {},
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  USERLOGOUT(state) {
    state.token = "";
    state.userInfo = {};
    removeLoginToken();
  },
};

const actions = {
  async getCode(mutation, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      mutation.commit("GETCODE", result.data);
      return "ok";
    }
    return Promise.reject(new Error("getcode error: " + result.message));
  },
  async userRegister({ commit }, data) {
    let result = await reqUserRegister(data);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("UserRegisterError: " + result.message));
    }
  },
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);

    if ((result.code = 200 && result.ok)) {
      commit("USERLOGIN", result.data.token);
      setLoginToken(result.data.token);
      return "ok";
    }

    return Promise.reject(new Error("login failed !" + result.message));
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("USERINFO", result.data);
      return "ok";
    }
    return Promise.reject(new Error("getUserInfo Error, " + result.message));
  },
  async userLogout({ commit }) {
    let result = await reqUserLogout();
    if (result.code == 200) {
      commit("USERLOGOUT");
      return "ok";
    }
    Promise.reject(new Error("userLogout error, " + result.message));
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
