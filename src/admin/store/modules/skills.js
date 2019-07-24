export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations:{
    SET_SKILLS(state, skills){
      state.skills = skills
    },
    ADD_SKILL(state, skill){
      state.skills.push(skill)
    },
    REMOVE_SKILL(state, skillId){
      state.skills = state.skills.filter(skill => skill.id !== skillId)
    }
  },
  actions: {
    async addSkill({ commit }, newSkill) {

        try{
            const {data : skill}= await this.$axios.post("/skills", newSkill);
            commit('ADD_SKILL', skill);
        } catch(error){
            throw new Error (
                error.response.data.error || error.response.data.message
            )
        }

    },
    async removeSkill({ commit } , skillId){
      try{
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId)
      } catch(error){

      }
    },

    async fetchSkills({ commit }){
      try{
        const {data : skills} = await this.$axios('/skills/142');
        commit("SET_SKILLS", skills);
      } catch(error){
      }
    }
  }
};
