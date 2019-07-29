<template lang="pug">
    .works_edit.admin_edit__block#works_edit
        .works_edit__title.admin_edit__title {{(mode === 'edit') ? 'Редактирование работы' : 'Добавить работу'}}
        .works_edit__content.admin_edit__content
            .works_edit__download.works_edit__content_block
                label.works_edit__file_label(v-if='work.photo === null ')
                  .works_edit__download_text Перетащите или загрузите для загрузки изображения
                  input(name="image" type="file" @change='loadPhoto').works_edit__add_input
                  button(type="button").admin_edit__button.works_edit__download_button Загрузить
                label.works_edit__file_label(v-else)
                  input(name="image" type="file" @change='loadPhoto').works_edit__add_input
                  img.works_edit_image(:src='photoUrl')
                  .works_edit__download_text_existed Изменить превью
            form.works_form.works_edit__content_block
                label.works_form__row.admin_form__row
                    .works_form__row-title.admin_form__row-title Название
                    input(
                      name="title"
                      type="text"
                      v-model="work.title"
                    ).works_form__row-input.admin_form__row-input
                label.works_form__row.admin_form__row
                    .works_form__row-title.admin_form__row-title ССылка
                    input(
                      name="link"
                      type="text"
                      v-model='work.link'
                      ).works_form__row-input.admin_form__row-input
                label.works_form__row.admin_form__row
                    .works_form__row-title.admin_form__row-title Описание
                    textarea(
                      name="description"
                      type="text"
                      v-model='work.description'
                    ).works_form__row-input.works_form__row-textarea.admin_form__row-textarea.admin_form__row-input
                label.works_form__row.admin_form__row
                    .works_form__row-title.admin_form__row-title Добавление тэга
                    input(
                      name='techs'
                      type="text"
                      v-model='work.techs'
                    ).works_form__row-input.admin_form__row-input
                worksTechs(
                    :tags='work.techs'
                    @defineTagsString='defineTagsString'
                  )
                .works_form__btns.admin_form__btns
                    button.admin_edit__button.form__reset(type="reset"  @click.prevent="$emit('closeAddForm')") Отмена
                    button(type="submit"  @click.prevent="mode === 'new' ? addNewWork() : editExistedWork()").admin_edit__button.form__save Сохранить
</template>


<script>
import { mapActions, mapState } from "vuex";
import { getAbsoluteImgPath } from "admin/helpers/pictures";
export default {
  components:{
    worksTechs: () => import("components/worksTechs")
  },

  props: {
    mode: String
  },
  data() {
    return {
      baseUrl: "",
      photoUrl: "",
      techString: "",
      work: {
        title: "",
        techs: "",
        photo: null,
        link: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    })
  },
  watch: {
    currentWork() {
      if (this.mode === "edit") this.getCurrentWork();
    },
    mode() {
      if (this.mode === "edit") {
        this.getCurrentWork();
      } else {
        this.work = {};
        this.work.techs = "";
        this.photoUrl = "";
      }
    }
  },
  methods: {
    ...mapActions("works", ["editWork", "addWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewWork() {
      try {
        const response = await this.addWork(this.work);
        this.work = {};
        this.$emit('closeAddForm');
        this.showTooltip({
          type: "success",
          text: 'Новая работа добавлена'
        });
      } catch(error){
        this.showTooltip({
          type: "error",
          text: error.message
          
        });
      }
    },
    async editExistedWork() {
      try {
        const response = await this.editWork(this.work);
        this.work = {};
        this.$emit('closeAddForm');
        this.showTooltip({
          type: "success",
          text: response.message
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    loadPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photoUrl = reader.result;
        };
      } catch (error) {}
    },
    getCurrentWork() {
      this.work = { ...this.currentWork};
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
      this.work.photo = "";
    },
    defineTagsString(value) {
      this.work.techs = value;
		}
  },
  created() {
    if (this.mode === "edit") this.getCurrentWork();
  }
};
</script>
