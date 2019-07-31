<template lang="pug">
    section#admin_works.admin_section
      .admin_section__container
          .admin_panel__title Блок "Работы"
          worksAdd(
            v-if='mode !== ""'
            :mode='mode'
            @closeAddForm='closeAddForm'
          )
          .admin_works__list.admin_block__list
              .add_works.add_block.admin_works__item.admin_block__item
                  a(href="#" @click='addWork').add_block__btn
                  .add_block__text Добавить Работу
              worksList(
                v-for="work in works"
                :work='work'
                :key="work.id"
                :mode='mode'
                @changemode='modeOn'
                )
</template>



<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    worksList: () => import("components/worksList"),
    worksAdd: () => import("components/worksAdd")
  },
  data() {
    return {
      mode: ""
    };
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    ...mapActions("tooltips", ["showTooltip"]),
    modeOn(mode) {
      this.mode = mode;
    },
    addWork(){
      this.mode = 'new'
    },
    closeAddForm(value){
      this.mode = '';
    }
  },
  async created() {
    try {
      const response = await this.fetchWorks();
      this.showTooltip({
        type: "success",
        text: "Работы добавлены"
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
#admin_works {
  font-weight: 600;
  color: $admin-black;

  .works_edit__content {
    width: 100%;
    display: flex;
    @include tablets {
      flex-direction: column;
    }
  }

  .works_edit__content_block {
    width: 49%;
    @include tablets {
      width: 80%;
    }
    @include phones {
      width: 100%;
    }
  }

  .works_edit__download {
    position: relative;
    border: 1px dashed $admin-gray;
    height: 280px;
    background-color: #dee4ed;
    margin: 0 30px 0 0;
    @include tablets {
      margin: 0 0 100px 0;
    }
  }
  .works_edit_image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .works_edit__download_text {
    color: $admin-gray;
    line-height: 2.12;
    margin-bottom: 25px;
    z-index: 10;
  }
  .works_edit__download_text_existed{
    position:absolute;
    bottom:-70px;
    color:$blue;
  }
  

  .works_edit__download_button {
    z-index: 10;
  }

  .works_form__row{
    position: relative;
  }

  .works_form__row(:last-child) {
    margin-bottom: 20px;
  }

  .works_edit__file_label {
    position: relative;
    display: flex;
    padding: 0 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .works_edit__add_input {
    width:100%;
    height:100%;
    position:absolute;
    opacity:0;
  }

  .works_form__tag_list {
    display: flex;
    margin-bottom: 40px;
  }

  .works_form__tag_item {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    color: $admin-gray;
    cursor: pointer;
  }

  .tag_item__btn {
    position: relative;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background: svg-load("remove.svg", fill=#414c63, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .works_form__btns {
    @include tablets {
      justify-content: center;
    }
  }

  .admin_works__item {
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding-bottom: 40px;
  }

  .admin_works__item--active {
    opacity: 0.5;
  }

  .admin_works__item_img {
    position: relative;
    margin-bottom: 40px;
  }

  .admin_works__item_pic {
    width: 100%;
    max-height: 100%;
    min-height: 190px;
  }

  .admin_works__item_list {
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
  }

  .admin_works__item_item {
    color: $admin-black;
    font-size: 13px;
    display: flex;
    padding: 8px 15px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
  }

  .admin_works__item_item:not(:last-child) {
    margin-right: 8px;
  }

  .admin_works_item_inf {
    padding: 0 30px;
  }

  .admin_works__item_title {
    font-weight: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .admin_works__item_description {
    line-height: 1.88;
    margin-bottom: 20px;
  }

  .admin_works__item_link {
    display: block;
    color: $blue;
    margin-bottom: 45px;
  }
}
</style>

