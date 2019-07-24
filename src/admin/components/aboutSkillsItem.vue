<template lang="pug">
    li.about_form__skill
        label(class="skill_wrap about_form__row" :class="{'form_row--active' : disabled}")
            input.skill_input.skill_name.about_form__input(:disabled="changed" :placeholder="skill.title")
            .percent_wrap.skill__percent_wrap
                input.skill_input.skill_percent.about_form__percent.about_form__input(:disabled="changed" type="number" maxlength="3" :placeholder="skill.percent")
            .form_buttons
                button.about_form__buttons.change.about_form__btn(type="button" @click='changeSkill')
                button.about_form__buttons.remove.about_form__btn(type="button" @click="removeExistedSkill")
            .form_buttons--active.about_form__btns
                button.about_form__buttons.accept.about_form__btn(type="button")
                button.about_form__buttons.decline.about_form__btn(type="button" @click='declineChangeSkill')
</template>



<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      disabled: false,
      changed: true
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        alert("Ошибка при удалении скилла");
      }
    },
    changeSkill() {
      this.disabled = !this.disabled;
      this.changed = !this.changed;
    },
    declineChangeSkill() {
      this.disabled = !this.disabled;
      this.changed = !this.changed;
    }
  }
};
</script>
