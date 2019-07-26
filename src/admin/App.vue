<template lang="pug">
  .wrapper
    .maincontent
      template
        app-header
        app-menu
        main.admin_panel
          .admin_panel__container
            router-view
        alert(:class="{'visible' : visible}")

</template>




<script>

import {mapState, mapActions, mapGetters} from 'vuex';
export default {
  components: {
    appHeader:() => import('./components/header.vue'),
    appMenu:() => import('./components/menu.vue'),
    alert:() => import('./components/alert.vue')
  },
  computed:{
    ...mapState('tooltips', { visible: state => state.visible })
  },
  methods:{
    ...mapActions('tooltips', ['closeTooltip'])
  },
  watch:{
    visible(value){
      if (value === true){
        let timeout;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  } 
};
</script>


<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/fonts";
@import "../styles/layout/base";

body {
  color: $text-black;
}



///Общие стили блоков


.maincontent{
  position: relative;
}
//КНОПКА КРЕСТИК
.button__close {
  width: 30px;
  height: 30px;
  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: svg-load(
        "remove.svg",
        fill=$text-white,
        width=100%,
        height=100%
      )
      center center no-repeat;
  }
}

.admin_panel__container {
  padding: 0 60px;
  position: relative;
  @include phones {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.admin_section__container {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
}

///Title

.admin_panel__title {
  font-size: 21px;
  font-weight: 700;
  color: $text-black;
  margin-bottom: 60px;
  @include phones {
    padding: 0 30px;
  }
}

///Синий Квадрат

.add_block {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 30px;
  @include phones {
    height: 110px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .add_block__btn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative;
    margin: 0 0 30px 0;
    @include phones {
      width: 50px;
      height: 50px;
      margin: 0 30px 0 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: 35px;
      height: 35px;
      transform: translate(-50%, -50%) rotate(-45deg);
      top: 50%;
      left: 50%;
      background: svg-load("remove.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
      @include phones {
        width: 12px;
        height: 12px;
      }
    }
  }
  .add_block__text {
    word-wrap: break-word;
  }
}

.admin_edit__block {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 30px;
  margin-bottom: 30px;
  @include phones {
    padding: 0;
  }
}

.admin_edit__title {
  width: 100%;
  padding: 0 10px 25px 10px;
  border-bottom: 1px solid $admin-gray;
  color: $admin-black;
  font-weight: 700;
  margin-bottom: 50px;
  @include phones {
    padding: 0 30px 25px 30px;
  }
}

.admin_edit__content {
  width: 100%;
  display: flex;
  @include tablets {
    flex-direction: column;
    align-items: center;
  }
  @include phones {
    padding: 30px;
  }
}
.admin_form__row {
  width: 100%;
  display: block;
}

.admin_form__row:not(:last-child) {
  margin-bottom: 30px;
}

.admin_form__row-title {
  color: $admin-gray;
  margin-bottom: 20px;
}
.admin_form__row-input {
  width: 100%;
  border: none;
  border-bottom: 1px solid $admin-black;
  padding-bottom: 20px;
}

.admin_form__row-textarea {
  resize: none;
  height: 150px;
  padding: 20px 80px 20px 20px;
  border: 1px solid $admin-gray;
}

.admin_edit__button {
  width: 180px;
  color: $text-white;
  font-weight: 700;
  border-radius: 40px;
  padding: 20px 45px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}
.admin_form__btns {
  display: flex;
  justify-content: flex-end;
}

.form__reset {
  color: $blue;
  background-image: none;
  background: #fff;
}
.admin__item_btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.admin__item_btn {
  position: relative;
  display: flex;
  align-items: center;
  color: $admin-gray;
  padding-right: 30px;
  padding-left: 0;
  &::after {
    right: 0;
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
  }
}

.admin__item_remove {
  &::after {
    background: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%)
      center center no-repeat;
  }
}

.admin__item_change {
  &::after {
    background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%)
      center center no-repeat;
  }
}

.admin_block__list {
  display: grid;
  width: 100%;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  grid-gap: 30px 30px;
  @include tablets {
    grid-template-columns: 50% 50%;
  }
  @include phones {
    grid-template-columns: auto;
  }
}
</style>


