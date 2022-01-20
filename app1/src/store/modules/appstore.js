/**
 * 子应用通信store
 */
export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    // 设置父应用信息
    SET_DATA_VALUE(state, data) {
      state.data = data;
    }
  },
  actions: {
    // 设置父应用信息
    setData({ commit }, data) {
      commit("SET_DATA_VALUE", data);
    }
  }
};
