<template lang="pug">
  .admin_welcome
      .authorization
        .authorization__title Авторизация
        form(@submit.prevent='login').authorization__form
          label.athorization__row.athorization__login(:class="{form_error: !nameValid}")
            .login__title.athorization__row_title Логин
            .athorization__input_wrap.login__input_wrap
              input(
                v-model='user.name'
                @input="validateName"
                ).login__input.athorization__input
            .error_alert {{ nameError }}
          label.athorization__row.athorization__pass(:class="{form_error: !passwordValid}")
            .pass__title.athorization__row_title  Пароль
            .athorization__input_wrap.pass__input_wrap
              input(
                type="password"
                v-model='user.password'
                @input="validatePassword"
                ).login__input.athorization__input
            .error_alert {{ passwordError }}
          button.admin_edit__button.authorization__btn ВОЙТИ
        button(type="button").athorization__close   
      .login_data
        .login_data__name Логин - Irony
        .login_data_password Пароль - 1rfyrehj15
</template>

<script>
import $axios from "admin/requests";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      nameValid: true,
      passwordValid: true,
      nameError: "",
      passwordError: ""
    };
  },
  methods: {
    ...mapActions("tooltips", ["showTooltip"]),
    async login() {
      let nameValid = this.validateName();
      let passwordValid = this.validatePassword();
      if (nameValid && passwordValid) {
        try {
          const {
            data: { token }
          } = await $axios.post("/login", this.user);
          localStorage.setItem("token", token);
          $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
          const { data } = await $axios.get('/user');
          localStorage.setItem('user', data.user.id);
          this.$router.replace("/");
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: 'Неверный логин или пароль'
          });
        }
      }
    },
    validateName() {
      if (this.user.name.length < 1) {
        this.nameValid = false;
        this.nameError = "Введите Логин";
      } else {
        this.nameValid = true;
        this.nameError = "";
      }
      return this.nameValid;
    },
    validatePassword() {
      if (this.user.password.length < 1) {
        this.passwordValid = false;
        this.passwordError = "Введите пароль";
      } else {
        this.passwordValid = true;
        this.passwordError = "";
      }
      return this.passwordValid;
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

  .login_data {
    margin-left:50px;
    background-color:#fff;
    width:200px;
  }

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
    position: relative;
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

  .form_error {
    border-bottom: 1px solid red;
  }
}
</style>

