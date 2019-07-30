<template lang="pug">
    section#admin_rewiews.admin_section
        .admin_section__container
            .admin_panel__title Блок "Отзывы"
            rewiewsAdd(
              v-if='mode !== "" '
              :mode='mode'
              @closeAddForm='closeAddForm'
              )
            .admin_rewiews__list.admin_block__list
                .add_rewiew.add_block.admin_rewiews__item.admin_block__item
                    a(href="#" @click='addRewiew').add_block__btn
                    .add_block__text Добавить отзыв
                rewiewsList(
                  v-for='rewiew in rewiews'
                  :rewiew='rewiew'
                  :key='rewiew.id'
                  :mode='mode'
                  @changemode='changemode'
                )
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    rewiewsAdd: () => import('components/rewiewsAdd.vue'),
    rewiewsList: () => import('components/rewiewsList.vue')
  },
  data(){
    return{
      mode:''
    }
  },
  computed: {
    ...mapState("rewiews", {
      rewiews: state => state.rewiews
    })
  },
  methods:{
    ...mapActions('rewiews', ['fetchRewiews']),
    ...mapActions('tooltips',['showTooltip']),
    changemode(value){
      this.mode = value
    },
    addRewiew(){
      this.mode = 'new';
    },
    closeAddForm(){
      this.mode = '';
    }
  },
  async created() {
    try {
      const response = await this.fetchRewiews();
      this.showTooltip({
        type: "success",
        text: "Отзывы добавлены"
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

<style lang="postcss">
@import "../../../styles/mixins";
#admin_rewiews {
  .rewiews_edit__download {
    position: relative;
    margin: 0 30px 0 0;
    text-align: center;
    color: $blue;
    cursor:pointer;
    @include phones {
      margin: 0 0 40px 0;
    }
  }

  .rewiews_edit__download-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: #dee4ed;
    margin-bottom: 30px;
    position: relative;
    display: block;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 50;
      transform: translate(-50%, -50%);
      content: "";
      width: 100px;
      height: 100px;
      background: svg-load("user.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .rewiews_edit__download-pic{
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
  }

  .rewiews_edit__download-input{
    outline: none;
    border:none;
    position: absolute;
    width:100%;
    height:100%;
    display: none;
  }

  .rewiews_description{
    width: 50%;
    @include tablets {
      width: 100%;
    }
  }

  .rewiews__author {
    width: 100%;
    display: flex;
    @include tablets {
      flex-direction: column;
      padding-right: 130px;
      margin-bottom: 40px;
    }
    @include tablets {
      padding-right: 0;
    }
  }

  .rewiews_form__row:first-child {
    margin: 0 30px 0 0;
    @include tablets {
      margin: 0 0 40px 0;
    }
  }

  .rewiews_form__row-textarea {
    padding-right: 20px;
    height: 120px;
  }

  .admin_rewiew__item {
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding: 30px 0;
  }

  .add_rewiew__author {
    width: 100%;
    padding: 0px 30px 30px 30px;
    border-bottom: 1px solid $admin-gray;
    margin-bottom: 30px;
    display: flex;
    @include phones {
      padding: 0 30px 30px 30px;
    }
  }

  .add_rewiew__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  .add_rewiew__pic {
    width: 100%;
    height: 100%;
  }

  .add_rewiew__name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .add_rewiew__title {
    color: $admin-gray;
  }

  .add_rewiew__inf {
    padding: 0px 30px;
  }

  .add_rewiew__description {
    line-height: 1.88;
    color: rgba(65, 76, 99, 0.7);
    margin-bottom: 60px;
  }
}
</style>

