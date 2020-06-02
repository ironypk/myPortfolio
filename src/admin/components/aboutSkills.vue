<template lang="pug">
    form(
      ).admin_about__about_form
        label.about_form__row.about_form__name(:class="{form_error: !categoryNameValid}")
          input(
            name="categoryName"
            type="text"
            v-model="editedCategory.category"
            :disabled="categoryDisabled"
            @input='validateCategoryName'
            ).name_input.about_form__input
          .error_alert {{ categoryNameError }}
          .form_buttons(v-if='categoryDisabled')
              button(@click.prevent='toggleCategory').about_form__buttons.change.about_form__btn
              button(@click.prevent='removeCurrentCategory').about_form__buttons.remove.about_form__btn
          .form_buttons--active.about_form__btns(v-else)
              button.about_form__buttons.accept.about_form__btn(@click.prevent="editCurrentCategory")
              button.about_form__buttons.decline.about_form__btn(@click.prevent='toggleCategory')
        ul.about_form__skills
            aboutSkillsItem(
                v-for= "skill in skills"
                :key="skill.id"
                :skill="skill"
                )
        label.about_form__description.about_form__row
            .skillname_wrap.description__skillname_wrap.about_form__description_wrap(:class="{form_error: !skillNameValid}")
              input(
                name="skillName"
                type="text"
                placeholder="Новый навык"
                :disabled='skillDisabled'
                v-model='skill.title'
                @input='validateSkillName'
                ).description_input.description_name.about_form__input.freo
              .error_alert {{ skillNameError }}
            .percent_wrap.description__percent_wrap.about_form__description_wrap(:class="{form_error: !skillPercentValid}")
                input(
                  name="skillPercent"
                  type="number"
                  min="0"
                  max="100"
                  :disabled='skillDisabled'
                  v-model='skill.percent'
                  @input='validateSkillPercent'
                  ).description_input.description_percent.about_form__input.about_form__percent
                .error_alert {{ skillPercentError }}
            button(@click.prevent='addNewSkill' :disabled='skillDisabled').description__add_btn.admin_about__add_btn
    
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    category: Object,
    skills: Array
  },
  components: {
    aboutSkillsItem: () => import("./aboutSkillsItem")
  },
  data() {
    return {
      editedCategory: { ...this.category },
      groupTitle: "",
      categoryDisabled: true,
      skillDisabled: false,
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      },
      categoryNameValid: true,
      skillNameValid: true,
      skillPercentValid: true,
      categoryNameError: "",
      skillNameError: "",
      skillPercentError: ""
    };
  },
  methods: {
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async editCurrentCategory() {
      let categoryNameValid = this.validateCategoryName();
      if (categoryNameValid) {
        try {
          const response = await this.editCategory(this.editedCategory);
          this.toggleCategory();
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
    async removeCurrentCategory() {
      try {
        const response = await this.removeCategory(this.category.id);
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
    async addNewSkill() {
      let skillNameValid = this.validateSkillName();
      let skillPercentValid = this.validateSkillPercent();
      if (skillNameValid && skillPercentValid) {
        this.skillDisabled = !this.skillDisabled;
        try {
          const response = await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
          this.showTooltip({
            type: "success",
            text: "Запись добавлена"
          });
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.message
          });
        } finally {
          this.skillDisabled = !this.skillDisabled;
        }
      }
    },
    toggleCategory() {
      this.categoryNameValid = true;
      if (!this.categoryDisabled) {
        this.editedCategory = { ...this.category };
      }
      this.categoryDisabled = !this.categoryDisabled;
    },
    validateCategoryName() {
      if (this.editedCategory.category.length < 1) {
        this.categoryNameValid = false;
        this.categoryNameError = "Введите Название категории";
      } else {
        this.categoryNameValid = true;
        this.categoryNameError = "";
      }
      return this.categoryNameValid;
    },
    validateSkillName() {
      if (this.skill.title.length < 1) {
        this.skillNameValid = false;
        this.skillNameError = "Введите название навыка";
      } else {
        this.skillNameValid = true;
        this.skillNameError = "";
      }
      return this.skillNameValid;
    },
    validateSkillPercent() {
      if (this.skill.percent.length < 1) {
        this.skillPercentValid = false;
        this.skillPercentError = "Введите процент навыка";
      } else if (this.skill.percent > 100) {
        this.skillPercentValid = false;
        this.skillPercentError = "Процент не больше 100";
      } else {
        this.skillPercentValid = true;
        this.skillPercentError = "";
      }
      return this.skillPercentValid;
    }
  }
};
</script>




<style lang="postcss">
.about_form__description .error_alert {
  margin-left: 0;
  left: -50px;
}
</style>

