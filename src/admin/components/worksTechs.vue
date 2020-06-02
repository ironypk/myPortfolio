<template lang="pug">
    ul.works_form__tag_list(v-if='tagArr[0] !== ""')
        li.works_form__tag_item(
            v-for='tag in tagArr'
            :key='tag.id'
            @click='removeExistedTag(tag)'
            )
            .div {{ tag }}
            .tag_item__btn
</template>


<script>
export default {
  props: {
    tags: String
  },
  data() {
    return {
      tagArr: []
    };
  },
  watch: {
    tags() {
      this.createTag();
    }
  },
  methods: {
    createTag() {
      this.tagArr = this.tags.split(", ");
    },
    removeExistedTag(tag) {
      const newString = this.tags.replace(
        new RegExp(
          "\\b" +
            tag +
            "\\s*,\\s*(?=\\S)|\\b,\\s*" +
            tag +
            "\\s*$|^\\s*" +
            tag +
            "\\s*$",
          "g"
        ),
        ""
      );
      this.$emit("defineTagsString", newString);
    }
  },
  async created() {
    try {
      await this.createTag();
    } catch (error) {}
  }
};
</script>