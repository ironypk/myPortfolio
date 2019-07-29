import { wrapIntoFormData } from "admin/helpers/forms";
export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    SET_WORK(state, works) {
      state.works = works;
    },
    ADD_WORK(state, newWork) {
      state.works.push(newWork);
    },
    EDIT_WORK(state, editedWork){
      state.works = state.works.map(work=> {
        return work.id === editedWork.id ? editedWork : work;
      })
    },
    REMOVE_WORK(state, workId) {
      state.works = state.works.filter(work => work.id !== workId);
    },
    CHANGE_WORK(state, work) {
      state.currentWork = work;
    }
  },
  actions: {
    async addWork({ commit }, work) {
        const newDataWork = wrapIntoFormData(work);

      try {
        const {data : work} = await this.$axios.post("/works", newDataWork);
        commit("ADD_WORK", work);
        return work;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editWork({ commit }, editedWork) {
        const newDataEditedWork = wrapIntoFormData(editedWork);
      try {
        const {data : work} = await this.$axios.post(
          `/works/${editedWork.id}`,
          newDataEditedWork
        );
        commit("EDIT_WORK", work);
        return work;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch {}
    },
    async fetchWorks({ commit }) {
      try {
        const { data: works } = await this.$axios("/works/142");
        commit("SET_WORK", works.reverse());
        return works;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
    
  }
};
