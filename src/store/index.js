import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    fetchUsers(context, payload) {
      const baseURL = `https://randomuser.me/api/?page=${payload.currentPage}&results=${payload.maxPerPage}&seed=Mandaya`;
      axios
        .get(baseURL)
        .then(({ data }) => {
          context.commit("setUsers", data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
