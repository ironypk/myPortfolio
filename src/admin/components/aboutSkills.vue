<template lang="pug">
    form(
      ).admin_about__about_form
        label.about_form__row.about_form__name
          input(
            name="categoryName"
            type="text"
            v-model="editedCategory.category"
            :disabled="categoryDisabled"
            ).name_input.about_form__input
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
            input(
              name="skillName"
              type="text"
              placeholder="Новый навык"
              :disabled='skillDisabled'
              v-model='skill.title'
              ).description_input.description_name.about_form__input
            .percent_wrap.description__percent_wrap
                input(
                  name="skillPercent"
                  type="number"
                  min="0"
                  max="100"
                  :disabled='skillDisabled'
                  v-model='skill.percent'
                  ).description_input.description_percent.about_form__input.about_form__percent
            button(@click.prevent='addNewSkill' :disabled='skillDisabled').description__add_btn.admin_about__add_btn
    
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
      editedCategory: {...this.category},
      groupTitle: "",
      categoryDisabled: true,
      skillDisabled : false,
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    };
  },
  methods: {
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    ...mapActions("skills", ["addSkill"]),
    async editCurrentCategory(){
      try{
        await this.editCategory(this.editedCategory);
        this.toggleCategory()
      }catch(error){

      }
    },
    async removeCurrentCategory(){
      try{
        await this.removeCategory(this.category.id)
      }catch(error){

      }
    },
    async addNewSkill() {
    this.skillDisabled =!this.skillDisabled;
      try {
        await this.addSkill(this.skill);
        this.skill.title = '';
        this.skill.percent = '';
        //тултип
      } catch (error) {
        alert(error.message); //mdn Error прочитать
      } finally {
          this.skillDisabled = !this.skillDisabled
      }
    },
    toggleCategory() {
      if(!this.categoryDisabled){
        this.editedCategory = {...this.category}
      }
      this.categoryDisabled = !this.categoryDisabled;
    }
  }
};
</script>
