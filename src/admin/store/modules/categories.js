export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations:{
    SET_CATEGORY(state, categories){
      state.categories = categories;
    },
    ADD_CATEGORY(state, category){
      state.categories.push(category)
    },
    REMOVE_CATEGORY(state, categoryId){
      state.categories = state.categories.filter(category => category.id !== categoryId)
    },
    EDIT_CATEGORY(state, editedCategory){
      state.categories= state.categories.map(category => {
        return category.id === editedCategory.id ? editedCategory : category;
      })
    }
  },
  actions: {
    async addCategory({ commit }, groupTitle){
      try{
        const {data : category} = await this.$axios.post('/categories', {
          title : groupTitle
        })
        commit('ADD_CATEGORY', category);
      } catch(error){}
    },
    async editCategory({commit}, category){
      try{
        const response = await this.$axios.post(`/categories/${category.id}`, {
          title : category.category
        });
        commit("EDIT_CATEGORY", category)

      }catch(error){

      }
    },
    async removeCategory({ commit }, categoryId){
      try{

        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId)


      }catch(error){

      }
    },
    async fetchCategories({ commit }) {
      try {
        const {data : categories} = await this.$axios("/categories");
        commit("SET_CATEGORY", categories.reverse()); 
      } catch (error) {}
    }
  }
};
