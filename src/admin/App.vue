<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/fonts";
@import "../styles/layout/base";

body {
  color: $text-black;
}

.admin_header {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to right, #3e3e59, #454573);
}

.header_admin__container {
  display: flex;
  align-items: center;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.avatar_pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header_admin__content {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.header_admin__name {
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $text-white;
  &::before {
    content: "Панель администрирования";
    position: absolute;
    color: $text-white-opacity;
    font-size: 14px;
    white-space: nowrap;
    left: 200px;
  }
}

.header__admin_btn {
  color: $text-white-opacity;
  border-bottom: 1px solid $text-white-opacity;
}

.admin_menu {
  color: $text-black-opacity;
}

////navbar

.admin_menu__list {
  display: flex;
}

.admin_menu__item {
  padding: 30px;
  color: $blue;
}

.admin_menu__item--active {
  border-bottom: 3px solid $blue;
}

///Title

.admin_panel__title {
  font-size: 21px;
  font-weight: 700;
  color: $text-black;
}
/////////////#ADMIN_ABOUT
#admin_about {
    display: none;
  //// BTN
  .admin_about__add_btn {
    position: relative;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    &::after {
      content: "";
      position: absolute;
      transform: rotate(-45deg);
      width: 15px;
      height: 15px;
      background: svg-load("remove.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }
  }

  //About me

  .admin_about__container {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .admin_about__head {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .admin_about__title {
    margin-right: 60px;
  }

  .admin_about__add {
    display: flex;
    color: $blue;
  }

  .add_btn {
    width: 20px;
    height: 20px;
    margin-right: 13px;
    &::after {
      width: 8px;
      height: 8px;
    }
  }
  ///ABOut FORM
  .admin_about__content {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-gap: 30px 30px;
  }
  .admin_about__about_form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    min-height: 390px;
    padding: 0 20px;
  }

  .admin_about__about_form:not(:last-child) {
    margin-right: 30px;
  }

  .about_form__input {
    border: none;
  }

  .about_form__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about_form__name {
    padding: 15px 10px;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
  }

  .name_input {
    width: 60%;
    font-size: 18px;
    font-weight: 600;
    color: $admin-black;
    padding: 10px 1px;
    &::placeholder {
      color: $admin-gray;
    }
  }

  .form_buttons {
    display: flex;
  }

  .about_form__btn {
    background-color: transparent;
    position: relative;
    width: 15px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .about_form__btn:not(:last-child) {
    margin-right: 20px;
  }

  .accept {
    &::after {
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .decline {
    &::after {
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .change {
    &::after {
      background: svg-load("pencil.svg", fill=gray;, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .remove {
    &::after {
      background: svg-load("trash.svg", fill=#414c63;, width=100%, height=100%)
        center center no-repeat;
    }
  }

  //about skills

  .about_form__skills {
    width: 100%;
    height: 60%;
  }

  .about_form__skills:not(:last-child) {
    margin-bottom: 10px;
  }

  .skill_wrap {
    width: 100%;
    display: flex;
    padding: 0 10px;
  }

  .skill_name {
    width: 60%;
    margin-right: 30px;
    padding: 10px 1px;
  }

  .about_form__percent {
    width: 70px;
  }

  .skill_percent {
    padding: 10px 25px 10px 10px;
  }

  .percent_wrap {
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      position: absolute;
      content: "%";
      right: 10px;
    }
  }

  .skill__percent_wrap {
    margin-right: 60px;
  }

  .about_form__description {
    justify-content: flex-end;
  }

  .description_input {
    border-bottom: 1px solid rgba(#000, 0.9);
  }

  .description_name {
    width: 50%;
    padding: 15px 20px;
    margin-right: 10px;
  }

  .description__percent_wrap {
    margin-right: 30px;
  }

  .description_percent {
    padding: 15px 25px 15px 15px;
  }
  ////ABOUT FORM ROW ACTIVE

  .form_buttons--active {
    display: none;
  }

  .form_row--active {
    input {
      border-bottom: 1px solid rgba(#000, 0.9);
    }
    .form_buttons {
      display: none;
    }
    .form_buttons--active {
      display: flex;
    }
  }
}
/////////////#ADMIN_WORKS
#admin_works{

}
</style>



<template lang="pug">
  
  .wrapper
    .maincontent
      header.admin_header
        .container.header_admin__container
          .avatar
            img(src="../images/content/user.jpg").avatar_pic
          .header_admin__content
            .header_admin__name Константин Бульба
            a.header__admin_btn Выйти
      .admin_panel
        .container.admin_panel__container
          nav.admin_menu
            ul.admin_menu__list
              - var menuItems = ['Обо мне', 'Работы', 'Отзывы']
              each item, ndx in menuItems
                li(class='admin_menu__item' + ((ndx===0) ? ' admin_menu__item--active': ''))
                  a.admin_menu__link= item
          section#admin_about
            .container.admin_about__container
              .admin_about__head
                h2.admin_about__title.admin_panel__title  Блок "Обо мне"
                .admin_about__add
                  button.add_btn.admin_about__add_btn
                  .add__text Добавить группу
              .admin_about__content
                - for(let i =0; i < 3; i++)
                  form.admin_about__about_form
                    label.about_form__row.about_form__name.form_row--active
                      input.name_input.about_form__input(placeholder="Название новой группы")
                      .form_buttons
                        button.about_form__buttons.change.about_form__btn(type="button")
                      .form_buttons--active.about_form__btns
                        button.about_form__buttons.accept.about_form__btn(type="button")
                        button.about_form__buttons.decline.about_form__btn(type="button")
                    ul.about_form__skills
                      -for(let i=0; i< 4; i++)
                        li.about_form__skill
                          label.skill_wrap.about_form__row
                            input.skill_input.skill_name.about_form__input(placeholder="Git")
                            .percent_wrap.skill__percent_wrap
                              input.skill_input.skill_percent.about_form__percent.about_form__input(placeholder="100")
                            .form_buttons
                              button.about_form__buttons.change.about_form__btn(type="button")
                              button.about_form__buttons.remove.about_form__btn(type="button")
                            .form_buttons--active.about_form__btns
                              button.about_form__buttons.accept.about_form__btn(type="button")
                              button.about_form__buttons.decline.about_form__btn(type="button")
                    label.about_form__description.about_form__row
                      input.description_input.description_name.about_form__input(placeholder="Новый навык")
                      .percent_wrap.description__percent_wrap
                        input.description_input.description_percent.about_form__input.about_form__percent(placeholder="100")
                      button.description__add_btn.admin_about__add_btn
          section#admin_works
            .container.admin_works__container
              .works_edit



                

            
        
      
</template>



