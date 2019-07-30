import { wrapIntoFormData } from "admin/helpers/forms";
export default {
  namespaced: true,
  state: {
    rewiews: [],
    currentRewiew: {}
  },
  mutations: {
    ADD_REWIEW(state, newRewiew) {
      state.rewiews.push(newRewiew);
    },
    SET_REWIEW(state, rewiews) {
      state.rewiews = rewiews;
    },
    REMOVE_REWIEW(state, rewiewId) {
      state.rewiews = state.rewiews.filter(rewiew => rewiew.id !== rewiewId);
    },
    CURRENT_REWIEW(state, rewiew){
      state.currentRewiew = rewiew
    },
    EDIT_REWIEW(state, editedRewiew){
      state.rewiews = state.rewiews.map(rewiew => {
        return rewiew.id === editedRewiew.id ? editedRewiew : rewiew;
      })
    },
  },
  actions: {
    async addRewiew({ commit }, newRewiew) {
        const newDataRewiew = wrapIntoFormData(newRewiew);
      try {
        const { data: rewiew } = await this.$axios.post("/reviews", newDataRewiew);
        commit("ADD_REWIEW", rewiew);
        return rewiew;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeRewiew({commit}, rewiewId){
      try{
        const response = await this.$axios.delete(`/reviews/${rewiewId}`)
        commit('REMOVE_REWIEW', rewiewId)
        return response
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editRewiew({commit}, editedRewiew){
      const newDataEditRewiew = wrapIntoFormData(editedRewiew);
      try{
        const {data : rewiew} = await this.$axios.post(`/reviews/${editedRewiew.id}`, newDataEditRewiew);
        commit("EDIT_REWIEW", rewiew.review)
        return rewiew
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchRewiews({ commit }) {
      try {
        const {data: rewiews} = await this.$axios("/reviews/142");
        commit("SET_REWIEW", rewiews.reverse());
        return rewiews;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
