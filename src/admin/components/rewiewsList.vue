<template lang="pug">
    .add_rewiew.admin_rewiew__item.admin_block__item
        .add_rewiew__author
            .add_rewiew__img
                img(:src='photoUrl').add_rewiew__pic
            .add_rewiew__init
                .add_rewiew__name {{rewiew.author}}
                .add_rewiew__title {{rewiew.occ}}
        .add_rewiew__inf
            .add_rewiew__description {{rewiew.text}}
            .admin__item_btns
                button(type="button" @click.prevent='changeCurrentRewiew').admin__item_change.admin__item_btn Править
                button(type="button" @click.prevent='currentRewiewRemove').admin__item_remove.admin__item_btn Удалить 
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { getAbsoluteImgPath } from "admin/helpers/pictures";
export default {
  props: {
    mode: String,
    rewiew: Object
  },
  data() {
    return {
      photoUrl: ""
    };
  },
  watch:{
    rewiew(){
      this.getPhoto(this.rewiew.photo);
    }
  },
  methods: {
    ...mapActions("rewiews", ["removeRewiew"]),
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapMutations("rewiews", ["CURRENT_REWIEW"]),
    async changeCurrentRewiew() {
      try {
        this.CURRENT_REWIEW(this.rewiew);
        this.$emit("changemode", "edit");
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async currentRewiewRemove() {
      try {
        const response = await this.removeRewiew(this.rewiew.id);
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
    getPhoto() {
      this.photoUrl = getAbsoluteImgPath(this.rewiew.photo);
    }
  },
  created() {
    this.getPhoto()
  }
};
</script>
