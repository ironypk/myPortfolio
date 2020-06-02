<template lang="pug">
    .works_edit.admin_edit__block#works_edit
        .works_edit__title.admin_edit__title {{(mode === 'edit') ? 'Редактирование работы' : 'Добавить работу'}}
        .works_edit__content.admin_edit__content
            .works_edit__download.works_edit__content_block
                label.works_edit__file_label(:class="{form_error: !photoValid}")
                  img.works_edit_image(v-if='work.photo !== null' :src='photoUrl')
                  vue-dropzone(ref="myVueDropzone" :useCustomSlot='true' id="customdropzone" :options="dropzoneOptions")
                  input(
                    name="image"
                    type="file"
                    @change='loadPhoto'
                    ).works_edit__add_input
                  .works_edit__download_text(:class='{works_edit__download_text_existed: work.photo !== null}') {{(work.photo !== null) ? 'Изменить фото' : 'Перетащите или загрузите для загрузки изображения'}}
                  button(v-if='work.photo === null' type="button").admin_edit__button.works_edit__download_button Загрузить
                  .error_alert {{ photoError }}
                  
            form.works_form.works_edit__content_block
                label.works_form__row.admin_form__row(:class="{form_error: !titleValid}")
                    .works_form__row-title.admin_form__row-title Название
                    input(
                      name="title"
                      type="text"
                      v-model="work.title"
                      @input="validateTitle"
                    ).works_form__row-input.admin_form__row-input
                    .error_alert {{ titleError }}
                label.works_form__row.admin_form__row(:class="{form_error: !linkValid}")
                    .works_form__row-title.admin_form__row-title ССылка
                    input(
                      name="link"
                      type="text"
                      v-model='work.link'
                      @input="validateLink"
                      ).works_form__row-input.admin_form__row-input
                    .error_alert {{ linkError }}
                label.works_form__row.admin_form__row(:class="{form_error: !descriptionValid}")
                    .works_form__row-title.admin_form__row-title Описание
                    textarea(
                      name="description"
                      type="text"
                      v-model='work.description'
                      @input="validateDescription"
                    ).works_form__row-input.works_form__row-textarea.admin_form__row-textarea.admin_form__row-input
                    .error_alert {{ descriptionError }}
                label.works_form__row.admin_form__row(:class="{form_error: !techsValid}")
                    .works_form__row-title.admin_form__row-title Добавление тэга
                    input(
                      name='techs'
                      type="text"
                      v-model='work.techs'
                      @input="validateTechs"
                    ).works_form__row-input.admin_form__row-input
                    .error_alert {{ techsError }}
                worksTechs(
                    :tags='work.techs'
                    @defineTagsString='defineTagsString'
                  )
                .works_form__btns.admin_form__btns
                    button.admin_edit__button.form__reset(type="reset"  @click.prevent="$emit('closeAddForm')") Отмена
                    button(type="submit"  @click.prevent="mode === 'new' ? addNewWork() : editExistedWork()").admin_edit__button.form__save Сохранить
</template>


<script>
import vue2Dropzone from "vue2-dropzone";
import { mapActions, mapState } from "vuex";
import { getAbsoluteImgPath } from "admin/helpers/pictures";
export default {
  components: {
    worksTechs: () => import("components/worksTechs"),
    vueDropzone: vue2Dropzone
  },

  props: {
    mode: String
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post"
      },
      photoUrl: "",
      techString: "",
      work: {
        title: "",
        techs: "",
        photo: null,
        link: "",
        description: ""
      },
      photoValid: true,
      titleValid: true,
      linkValid: true,
      descriptionValid: true,
      techsValid: true,
      descriptionError: "",
      titleError: "",
      linkError: "",
      techsError: "",
      photoError: ""
    };
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    })
  },
  watch: {
    photoUrl(){
      if(this.photoUrl !== ''){
        this.photoValid = true;
        this.photoError = "";
      }
    },
    currentWork() {
      if (this.mode === "edit") this.getCurrentWork();
    },
    mode() {
      if (this.mode === "edit") {
        this.getCurrentWork();
      } else {
        this.work = {
          title: "",
          techs: "",
          photo: null,
          link: "",
          description: ""
        };
        this.photoUrl = "";
      }
    }
  },
  methods: {
    ...mapActions("works", ["editWork", "addWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewWork() {
      let photoValid = this.validatePhoto();
      let titleValid = this.validateTitle();
      let techsValid = this.validateTechs();
      let linklValid = this.validateLink();
      let descriptionValid = this.validateDescription();
      if (
        photoValid &&
        titleValid &&
        techsValid &&
        linklValid &&
        descriptionValid
      ) {
        try {
          const response = await this.addWork(this.work);
          this.work = {};
          this.$emit("closeAddForm");
          this.showTooltip({
            type: "success",
            text: "Новая работа добавлена"
          });
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.message
          });
        }
      }
    },
    async editExistedWork() {
      let photoValid = this.validatePhoto();
      let titleValid = this.validateTitle();
      let techsValid = this.validateTechs();
      let linklValid = this.validateLink();
      let descriptionValid = this.validateDescription();
      if (
        photoValid &&
        titleValid &&
        techsValid &&
        linklValid &&
        descriptionValid
      ) {
        try {
          const response = await this.editWork(this.work);
          this.work = {};
          this.$emit("closeAddForm");
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
      this.work = { ...this.currentWork };
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
      this.work.photo = "";
    },
    defineTagsString(value) {
      this.work.techs = value;
    },

    validatePhoto() {
      if (this.work.photo === null || this.photoUrl === '') {
        this.photoValid = false;
        this.photoError = "Вставьте фото";
      } else {
        this.techsValid = true;
        this.techsError = "";
      }
      return this.photoValid;
    },

    validateTitle() {
      if (this.work.title.length < 1) {
        this.titleValid = false;
        this.titleError = "Введите Название";
      } else {
        this.titleValid = true;
        this.titleError = "";
      }
      return this.titleValid;
    },
    validateLink() {
      let regex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
      if (this.work.link.length < 8) {
        this.linkValid = false;
        this.linkError = "Слишком короткая ссылка";
      } else if (!regex.test(this.work.link)) {
        this.linklValid = false;
        this.linkError = "Неверная ссылка";
      } else {
        this.linkValid = true;
        this.linkError = "";
      }
      return this.linkValid;
    },
    validateDescription() {
      if (this.work.description.length === 0) {
        this.descriptionValid = false;
        this.descriptionError = "Введите описание";
      } else if (
        this.work.description.length < 10
      ) {
        this.descriptionlValid = false;
        this.descriptionError = "Слишком короткое описание";
      } else {
        this.descriptionValid = true;
        this.descriptionError = "";
      }
      return this.descriptionValid;
    },
    validateTechs() {
      if (this.work.techs.length === 0) {
        this.techsValid = false;
        this.techsError = "Введите Тэг";
      } else {
        this.techsValid = true;
        this.techsError = "";
      }
      return this.techsValid;
    }
  },
  created() {
    if (this.mode === "edit") this.getCurrentWork();
  }
};
</script>

<style lang="postcss">
#customdropzone {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
#customdropzone .dz-hidden-input {
  display: none;
}
</style>

