<template lang="pug">
    .rewiews_edit.admin_edit__block
        .rewiews_edit__title.admin_edit__title Новый отзыв
        pre {{ rewiew}}
        form.rewiews_edit__content.admin_edit__content
            label.rewiews_edit__download
                .rewiews_edit__download-img
                    img.rewiews_edit__download-pic(:src='photoUrl')
                input(
                    name="photo"
                    type='file'
                    @change='loadPhoto'
                    ).rewiews_edit__download-input
                .rewiews_edit__download-title Добавить фото
            .rewiews_description
                .rewiews__author
                    label.rewiews_form__row.admin_form__row
                        .works_form__row-title.admin_form__row-title Имя Автора
                        input(
                            name='author'
                            type="text"
                            v-model='rewiew.author'
                        ).works_form__row-input.admin_form__row-input
                    label.rewiews_form__row.admin_form__row
                        .works_form__row-title.admin_form__row-title Титул автора
                        input(
                            name="occ"
                            type="text"
                            v-model="rewiew.occ"
                        ).works_form__row-input.admin_form__row-input
                label.rewiews_form__row.admin_form__row
                    .rewiews_form__row-title.admin_form__row-title Описание
                    textarea(
                        name="text"
                        type="text"
                        v-model="rewiew.text"
                        ).rewiews_form__row-input.rewiews_form__row-textarea.admin_form__row-textarea.admin_form__row-input
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
      baseUrl: "",
      photoUrl: "",
      rewiew: {
        photo: null,
        author: "",
        occ: "",
        text: ""
      }
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
        this.rewiew = {};
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
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photoUrl = reader.result;
        };
      } catch (error) {}
    },
    async addNewRewiew() {
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
    },
    getCurrentRewiew() {
      this.rewiew = { ...this.currentRewiew };
      this.photoUrl = getAbsoluteImgPath(this.rewiew.photo);
      this.rewiew.photo = "";
    },
    async editExistedRewiew() {
      try {
        const response = await this.editRewiew(this.rewiew);
        this.rewiew = {};
        this.$emit("closeAddForm");
        this.showTooltip({
          type: "success",
          text: 'Отзыв успешно обновлен'
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  },
  created() {
    if (this.mode === "edit") this.getCurrentRewiew();
  }
};
</script>
