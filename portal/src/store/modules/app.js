/**
 * 基座传给子应用的token。
 * 用来做登陆校验
 */
export default {
    namespaced: true,
    state: {
        token: {}
    },
    mutations: {
        // 设置应用token
        SET_TOKEN_VALUE(state, data) {
            state.token = data;
        }
    },
    actions: {
        setToken({ commit }, data) {
            commit("SET_TOKEN_VALUE", data);
        }
    }
};
