const state = {
    token: 'x',
};

const getters = {
    isLoggedIn: (state) => !!state.token,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};
