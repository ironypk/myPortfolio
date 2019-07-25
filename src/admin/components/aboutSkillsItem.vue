<template lang="pug">
  li.about_form__skill
    input(
      name="name"
      type="text"
      :disabled="inputDisabled"
      v-model="editedSkill.title"
      ).skill_input.skill_name.about_form__input
    .percent_wrap.skill__percent_wrap
        input(
          name="percent"
          type="number"
          :disabled="inputDisabled"
          min="0"
          max="100"
          v-model="editedSkill.percent"
          ).skill_input.skill_percent.about_form__percent.about_form__input
    .form_buttons(v-if="inputDisabled")
        button(name="edit" type="button" @click='toggleSkill').about_form__buttons.change.about_form__btn
        button(name="remove" type="button" @click="removeExistedSkill").about_form__buttons.remove.about_form__btn
    .form_buttons--active.about_form__btns(v-else)
        button(name="save" type="button" @click="editCurrentSkill").about_form__buttons.accept.about_form__btn
        button(name="cancel" type="button" @click='toggleSkill').about_form__buttons.decline.about_form__btn
</template>



<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      inputDisabled: true,
      editedSkill: {...this.skill}
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        alert("Ошибка при удалении скилла");
      }
    },
    async editCurrentSkill(){
      try{
        const respose = await this.editSkill(this.editedSkill);
        this.toggleSkill();
      }catch(error){

      }
    },
    toggleSkill() {
      if(!this.inputDisabled){
        this.editedSkill = {...this.skill}
      }
      this.inputDisabled = !this.inputDisabled;
    }
  }
};
</script>



<style lang="postcss">
@import "../../styles/mixins";


</style>

