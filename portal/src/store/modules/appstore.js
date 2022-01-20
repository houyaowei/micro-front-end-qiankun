/**
 * 如果qiankun注册的全局state有变化，需要通知到这里，更新数据
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
    setData({ commit }, data) {
      commit("SET_DATA_VALUE", data);
    }
  }
};
