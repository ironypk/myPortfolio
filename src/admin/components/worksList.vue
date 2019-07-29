<template lang="pug">
    div(class="admin_works__item" :class="{'admin_works__item--active': mode === 'edit' && work.id === currentWork.id}")
        .admin_works__item_img
            img(:src='photoUrl').admin_works__item_pic
            ul.admin_works__item_list
                li.admin_works__item_item(
                  v-for='item in tags'
                  :key='item.id'
                ) {{ item }}
                  
        .admin_works_item_inf
            .admin_works__item_title {{work.title}}
            .admin_works__item_description {{work.description}}
            a.admin_works__item_link(:href="work.link") {{work.link}}
            .admin__item_btns
                a(@click='changeCurrentWork').admin__item_change.admin__item_btn Править
                a.admin__item_remove.admin__item_btn(@click='currentWorkRemove') Удалить
</template>



<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { getAbsoluteImgPath } from 'admin/helpers/pictures';
export default {
  props: {
    mode: String,
    work: Object
  },
  data(){
      return{
          tags:[],
          photoUrl: ''
      }
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    })
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapMutations('works', ['CHANGE_WORK']),
    async currentWorkRemove() {
      try {
        const response = await this.removeWork(this.work.id);
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

    changeCurrentWork(){
        this.CHANGE_WORK(this.work);
        this.$emit('changemode', 'edit');
    }
  },
  async created(){
    try{
      this.photoUrl = getAbsoluteImgPath(this.work.photo)
      this.tags = this.work.techs.split(', ');
    }catch(error){
    }
    
  }
};
</script>
