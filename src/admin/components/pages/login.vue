<template lang="pug">
  .admin_welcome
      .authorization
        .authorization__title Авторизация
        form(@submit.prevent='login').authorization__form
          label.athorization__row.athorization__login
            .login__title.athorization__row_title Логин
            .athorization__input_wrap.login__input_wrap
              input.login__input.athorization__input(v-model='user.name')
          label.athorization__row.athorization__pass
            .pass__title.athorization__row_title  Логин
            .athorization__input_wrap.pass__input_wrap
              input.login__input.athorization__input(type="password" v-model='user.password')
          button.admin_edit__button.authorization__btn ВОЙТИ
        button(type="button").athorization__close    
</template>

<script>
import $axios from "admin/requests";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions('tooltips', ['showTooltip']),
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  }
};
</script>



<style lang="postcss" scoped>
@import "../../../styles/mixins";

.admin_welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("~images/content/musician.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .authorization {
    position: relative;
    width: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 60px 80px;
    font-weight: 600;
    @include tablets {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      padding: 30px;
    }
  }

  .authorization__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .authorization__title {
    font-size: 36px;
    color: $text-black;
    margin-bottom: 35px;
  }

  .athorization__row {
    width: 100%;
    display: block;
    margin-bottom: 40px;
    border-bottom: 1px solid $admin-black;
  }

  .athorization__row_title {
    color: $admin-gray;
    margin-bottom: 25px;
    padding-left: 45px;
  }

  .athorization__input_wrap {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      opacity: 0.3;
    }
  }

  .login__input_wrap {
    &::before {
      background: svg-load(
          "user.svg",
          fill=$admin-black,
          width=100%,
          height=100%
        )
        center center no-repeat;
    }
  }

  .pass__input_wrap {
    &::before {
      background: svg-load(
          "key.svg",
          fill=$admin-black,
          width=100%,
          height=100%
        )
        center center no-repeat;
    }
  }

  .athorization__input {
    border: none;
    outline: none;
    padding-bottom: 20px;
    padding-left: 45px;
    font-size: 18px;
    font-weight: 700;
  }

  .authorization__btn {
    width: 350px;
    height: 80px;
    font-size: 18px;
  }

  .athorization__close {
    position: absolute;
    display: block;
    top: 30px;
    right: 30px;
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
          fill=$admin-black,
          width=100%,
          height=100%
        )
        center center no-repeat;
    }
  }
}
</style>

