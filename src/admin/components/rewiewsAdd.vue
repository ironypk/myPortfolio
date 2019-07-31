<template lang="pug">
    .rewiews_edit.admin_edit__block
        .rewiews_edit__title.admin_edit__title {{(mode === 'edit') ? 'Редактировать отзыв' : 'Новый отзыв'}}
        form.rewiews_edit__content.admin_edit__content
            label.rewiews_edit__download
                .rewiews_edit__download-img
                    img.rewiews_edit__download-pic(v-if='rewiew.photo !== null' :src='photoUrl')
                input(
                    name="photo"
                    type='file'
                    @change='loadPhoto'
                    ).rewiews_edit__download-input
                .rewiews_edit__download-title {{(mode === 'edit') ? 'Изменить фото' : 'Добавить фото'}}
            .rewiews_description
                .rewiews__author
                    label.rewiews_form__row.admin_form__row(:class="{form_error: !authorValid}")
                        .works_form__row-title.admin_form__row-title Имя Автора
                        input(
                            name='author'
                            type="text"
                            v-model='rewiew.author'
                            @input="validateAuthor"
                        ).works_form__row-input.admin_form__row-input
                        .error_alert {{ authorError }}
                    label.rewiews_form__row.admin_form__row(:class="{form_error: !occValid}")
                        .works_form__row-title.admin_form__row-title Титул автора
                        input(
                            name="occ"
                            type="text"
                            v-model="rewiew.occ"
                            @input="validateOcc"
                        ).works_form__row-input.admin_form__row-input
                        .error_alert {{ occError}}
                label.rewiews_form__row.admin_form__row(:class="{form_error: !textValid}")
                    .rewiews_form__row-title.admin_form__row-title Описание
                    textarea(
                        name="text"
                        type="text"
                        v-model="rewiew.text"
                        @input='validateText'
                        ).rewiews_form__row-input.rewiews_form__row-textarea.admin_form__row-textarea.admin_form__row-input
                    .error_alert {{ textError}}
                .rewiews_form__btns.admin_form__btns
                    button.admin_edit__button.form__reset(type="reset" @click.prevent="$emit('closeAddForm')") Отмена
                    button.admin_edit__button.form__save(type="submit" @click.prevent="mode === 'new' ? addNewRewiew() : editExistedRewiew()") Сохранить
</template>
<script>
import { mapActions, mapState } from "vuex";
import { getAbsoluteImgPath } from "admin/helpers/pictures";
export default {
  props: {
    mode: String
  },
  computed: {
    ...mapState("rewiews", {
      currentRewiew: state => state.currentRewiew
    })
  },
  data() {
    return {
      photoUrl: "",
      rewiew: {
        photo: null,
        author: "",
        occ: "",
        text: ""
      },
      authorValid: true,
      occValid: true,
      textValid: true,
      authorError: "",
      occError: "",
      textError: ""
    };
  },
  watch: {
    currentRewiew() {
      if (this.mode === "edit") this.getCurrentRewiew();
    },
    mode() {
      if (this.mode === "edit") {
        this.getCurrentRewiew();
      } else {
        this.rewiew = {
          photo: null,
          author: "",
          occ: "",
          text: ""
        };
        this.photoUrl = "";
      }
    }
  },
  methods: {
    ...mapActions("rewiews", ["addRewiew", "editRewiew"]),
    ...mapActions("tooltips", ["showTooltip"]),
    loadPhoto(e) {
      const file = e.target.files[0];
      this.rewiew.photo = file;
      this.getPhoto(file);
    },
    getPhoto(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photoUrl = reader.result;
        };
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
    },
    async addNewRewiew() {
      let authorValid = this.validateAuthor();
      let occValid = this.validateOcc();
      let textValid = this.validateText();
      if (authorValid && occValid && textValid) {
        try {
          const response = await this.addRewiew(this.rewiew);
          this.rewiew = {};
          this.$emit("closeAddForm");
          this.showTooltip({
            type: "success",
            text: "Отзыв, успешно добавлен"
          });
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.message
          });
        }
      }
    },
    async getCurrentRewiew() {
      this.rewiew = { ...this.currentRewiew };
      this.photoUrl = getAbsoluteImgPath(this.rewiew.photo);
      this.rewiew.photo = "";
    },
    async editExistedRewiew() {
      try {
        const response = await this.editRewiew(this.rewiew);
        this.rewiew = {
          photo: null,
          author: "",
          occ: "",
          text: ""
        };
        this.$emit("closeAddForm");
        this.showTooltip({
          type: "success",
          text: "Отзыв успешно обновлен"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    validateAuthor() {
      if (this.rewiew.author.length === 0) {
        this.authorValid = false;
        this.authorError = "Введите имя автора";
      } else {
        this.authorValid = true;
        this.authorError = "";
      }
      return this.authorValid;
    },
    validateOcc() {
      if (this.rewiew.occ.length === 0) {
        this.occValid = false;
        this.occError = "Введите титул автора";
      } else {
        this.occValid = true;
        this.occError = "";
      }
      return this.occValid;
    },
    validateText() {
      if (this.rewiew.text.length === 0) {
        this.textValid = false;
        this.textError = "Введите описание";
      } else if (this.rewiew.text.length < 10) {
        this.textValid = false;
        this.textError = "Слишком короткое описание";
      } else {
        this.textValid = true;
        this.textError = "";
      }
      return this.textValid;
    }
  },
  created() {
    if (this.mode === "edit") this.getCurrentRewiew();
  }
};
</script>
