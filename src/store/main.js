// module main

export default {
  state: {
    searchDate: new Date()
  },
  mutations: {
    updateSearchDate(state, payload) {
      state.searchDate = payload;
    }
  }
};
