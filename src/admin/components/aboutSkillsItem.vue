<template lang="pug">
  li.about_form__skill
    .name_wrap.about_form__skill_wrap(:class="{form_error: !nameValid}")
      input(
        name="name"
        type="text"
        :disabled="inputDisabled"
        v-model="editedSkill.title"
        @input="validateName"
        ).skill_input.skill_name.about_form__input
      .error_alert {{ nameError }}
      
    .percent_wrap.skill__percent_wrap.about_form__skill_wrap(:class="{form_error: !percentValid}")
        input(
          name="percent"
          type="number"
          :disabled="inputDisabled"
          min="0"
          max="100"
          v-model="editedSkill.percent"
          @input="validatePercent"
          ).skill_input.skill_percent.about_form__percent.about_form__input
        .error_alert {{ percentError }}
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
      editedSkill: { ...this.skill },
      nameValid:true,
      nameError:'',
      percentValid:true,
      percentError:''
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async removeExistedSkill() {
      try {
        const response = await this.removeSkill(this.skill.id);
        this.showTooltip({
          type: "success",
          text: response.data.message
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async editCurrentSkill() {
      let nameValid = this.validateName();
      let percentValid = this.validatePercent();
      if(nameValid && percentValid){
              try {
        const response = await this.editSkill(this.editedSkill);
        this.toggleSkill();
        this.showTooltip({
          type: "success",
          text: response.data.message
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
      }

    },
    toggleSkill() {
      this.nameValid = true;
      this.percentValid = true;
      if (!this.inputDisabled) {
        this.editedSkill = { ...this.skill };
      }
      this.inputDisabled = !this.inputDisabled;
    },
    validateName() {
      if (this.editedSkill.title.length < 1) {
        this.nameValid = false;
        this.nameError = "Введите название навыка";
      } else {
        this.nameValid = true;
        this.nameError = "";
      }
      return this.nameValid;
    },
        validatePercent() {
      if (this.editedSkill.percent.length < 1) {
        this.percentValid = false;
        this.percentError = "Введите процент навыка";
      } else if (this.editedSkill.percent > 100) {
        this.percentValid = false;
        this.percentError = "Процент не больше 100";
      } else {
        this.percentValid = true;
        this.percentError = "";
      }
      return this.percentValid;
    }
  }
};
</script>



<style lang="postcss">
@import "../../styles/mixins";
.about_form__skill_wrap .error_alert {
  margin-left: 0;
  left: -50px;
}
</style>

