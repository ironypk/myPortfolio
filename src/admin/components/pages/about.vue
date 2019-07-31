<template lang="pug">
  section#admin_about.admin_section
      .admin_section__container.admin_about__container
        .admin_about__head.admin_panel__title
            .admin_about__title  Блок "Обо мне"
            .admin_about__add
                button.add_btn.admin_about__add_btn(@click='addNewCategory' :disabled='disabled')
                .add__text Добавить группу
        .admin_about__content
          ul.skill__list
            li.skill__item(v-for="category in categories")
              aboutSkills(
                :category='category'
                :key="category.id"
                :skills='filterSkillsByCategoryId(category.id)'
              )
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    aboutSkills: () => import("components/aboutSkills")
  },
  data() {
    return {
      disabled: false,
      categoryTitle: "New category"
    };
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    }),
    ...mapState("skills", {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    ...mapActions("skills", ["fetchSkills"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewCategory() {
      this.disabled = !this.disabled;
      try {
        const response = await this.addCategory(this.categoryTitle);
        this.showTooltip({
          type: "success",
          text: "Категория успешно добалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.disabled = !this.disabled;
      }
    },
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  async created() {
    try {
     await this.fetchCategories();
      this.showTooltip({
        type: "success",
        text: 'Категории добавлены'
      });
    } catch (error) {
      this.showTooltip({
        type: "error",
        text: error.message
      });
    }

    try {
      await this.fetchSkills();
      this.showTooltip({
        type: "success",
        text: 'Записи добавлены'
      });
    } catch (error) {
      this.showTooltip({
        type: "error",
        text: error.message
      });
    }
  }
};
</script>




<style lang="postcss" >
@import "../../../styles/mixins";

#admin_about {
  .admin_about__add_btn {
    position: relative;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    &::after {
      content: "";
      position: absolute;
      transform: rotate(-45deg);
      width: 15px;
      height: 15px;
      background: svg-load("remove.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }
  }

  //About me

  .admin_about__head {
    display: flex;
    align-items: center;
  }

  .admin_about__title {
    margin-right: 60px;
  }

  .admin_about__add {
    font-size: 16px;
    display: flex;
    color: $blue;
  }

  .add_btn {
    width: 20px;
    height: 20px;
    margin-right: 13px;
    &::after {
      width: 8px;
      height: 8px;
    }
  }
  ///ABOut FORM
  .skill__list {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-gap: 30px 30px;
    @include phones {
      grid-template-columns: auto;
    }
  }
  .admin_about__about_form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    width: 100%;
    min-height: 390px;
    padding: 30px;
    @include phones {
      padding: 30px 0;
    }
  }

  .about_form__input {
    border: none;
    outline: none;
    color: black;
    border-bottom: 1px solid rgba(#000, 0.9);
    &:focus-within {
      border-color: $blue;
    }
    &:disabled {
      border-bottom: 1px solid trasparent;
      background-color: #fff;
      border-bottom: none;
    }
  }

  .about_form__row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .about_form__name {
    padding: 0 10px 15px 10px;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
    @include phones {
      padding: 0 30px 15px 30px;
    }
  }

  .name_input {
    width: 60%;
    font-size: 18px;
    font-weight: 600;
    color: $admin-black;
    padding: 10px 1px;
    &::placeholder {
      color: $admin-gray;
    }
  }

  .form_buttons {
    display: flex;
  }

  .about_form__btn {
    background-color: transparent;
    position: relative;
    width: 15px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .about_form__btn:not(:last-child) {
    margin-right: 20px;
  }

  .accept {
    &::after {
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .decline {
    &::after {
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .change {
    &::after {
      background: svg-load("pencil.svg", fill=gray;, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .remove {
    &::after {
      background: svg-load("trash.svg", fill=#414c63;, width=100%, height=100%)
        center center no-repeat;
    }
  }

  //about skills

  .about_form__skills {
    width: 100%;
    height: 60%;
    @include phones {
      padding: 0 30px;
    }
  }

  .about_form__skills:not(:last-child) {
    margin-bottom: 10px;
  }

  .about_form__skill {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    @include phones {
      padding: 0;
    }
  }

  .skill_name {
    width: 100px;
    margin-right: 30px;
    padding: 10px 1px;
  }

  .skill_percent {
    padding: 10px 25px 10px 10px;
  }

  .about_form__percent {
    width: 80px;
  }

  .percent_wrap {
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      position: absolute;
      content: "%";
      right: 10px;
    }
  }

  .skill__percent_wrap {
    margin-right: 60px;
  }

  .about_form__description {
    justify-content: flex-end;
    @include phones {
      justify-content: center;
    }
  }

  .about_form__description_wrap{
    position: relative;
  }

  .description__skillname_wrap{
    margin-right:10px;
  }

  .description_input {
    border-bottom: 1px solid rgba(#000, 0.9);
  }

    .form_error  .description_input {
    border-bottom: 1px solid rgba(red, 0.9);
  }

  .description_name {
    width: 100%;
    padding: 15px 20px;
    margin-right: 10px;
  }

  .description__percent_wrap {
    margin-right: 30px;
  }

  .description_percent {
    padding: 15px 25px 15px 15px;
  }
  ////ABOUT FORM ROW ACTIVE

  .form_buttons--active {
    display: flex;
  }


.form_error.about_form__name {
    border-bottom: 1px solid red;
 }

 .form_error .about_form__input {
    border-bottom: 1px solid rgba(red, 0.9);
 }
 .about_form__skill_wrap{
   position: relative;
 }


}
</style>

