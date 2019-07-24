<template lang="pug">
    form(@submit.prevent='addNewSkill').admin_about__about_form
        label(class="about_form__row about_form__name"  :class="{'form_row--active' : changed}")
            h2(v-if="changed === false") {{category.category}}
            input.name_input.about_form__input(v-else="changed=== true" :placeholder="'Название новой группы'" v-model='groupTitle' :disabled="disabled")
            .form_buttons
                button.about_form__buttons.change.about_form__btn(type="button" @click="changeTitle")
            .form_buttons--active.about_form__btns
                button.about_form__buttons.accept.about_form__btn(type="button" @click="addSkillGroup")
                button.about_form__buttons.decline.about_form__btn(type="button")
        ul.about_form__skills
            aboutSkillsItem(
                v-for= "skill in skills"
                :key="skill.id"
                :skill="skill"
                )
        label.about_form__description.about_form__row
            input.description_input.description_name.about_form__input(:disabled='disabled' placeholder="Новый навык" v-model='skill.title')
            .percent_wrap.description__percent_wrap
                input.description_input.description_percent.about_form__input.about_form__percent(:disabled='disabled' type="number" maxlength="3" v-model='skill.percent')
            button.description__add_btn.admin_about__add_btn(:disabled='disabled')
    
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    category: Object,
    skills :Array
  },
  components: {
    aboutSkillsItem: () => import("./aboutSkillsItem")
  },
  data() {
    return {
      groupTitle: "",
      changed: false,
      disabled: false,
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    ...mapActions("skills", ["addSkill"]),
    async addSkillGroup() {
      try {
        this.changed = !this.changed;
        this.disabled = !this.disabled;
        await this.addNewSkillGroup(this.groupTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message);
      }
    },
    async addNewSkill() {
    this.disabled =!this.disabled;
      try {
        await this.addSkill(this.skill);
        this.skill.title = '';
        this.skill.percent = '';
        //тултип
      } catch (error) {
        alert(error.message); //mdn Error прочитать
      } finally {
          this.disabled = !this.disabled
      }
    },
    setupTitle() {
      this.changed = !this.changed;
      this.disabled = !this.disabled;
    },
    changeTitle() {
      this.changed = !this.changed;
      this.disabled = !this.disabled;
    }
  }
};
</script>
