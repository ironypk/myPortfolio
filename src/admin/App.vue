<template lang="pug">
  .wrapper
    .maincontent
      .admin_welcome
        .authorization
          .authorization__title Авторизация
          form.authorization__form
            label.athorization__row.athorization__login
              .login__title.athorization__row_title Логин
              .athorization__input_wrap.login__input_wrap
                input.login__input.athorization__input
            label.athorization__row.athorization__pass
              .pass__title.athorization__row_title  Логин
              .athorization__input_wrap.pass__input_wrap
                input.login__input.athorization__input
            button.admin_edit__button.authorization__btn ВОЙТИ
          button(type="button").athorization__close

          


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
          section#admin_about.admin_section
            .admin_section__container.admin_about__container
              .admin_about__head.admin_panel__title
                .admin_about__title  Блок "Обо мне"
                .admin_about__add
                  button.add_btn.admin_about__add_btn
                  .add__text Добавить группу
              .admin_about__content
                -for(let i=0; i< 3; i++)
                  form.admin_about__about_form
                    label(class="about_form__row" + " about_form__name" +((i===1) ? " form_row--active" : ''))
                      input.name_input.about_form__input(placeholder="Название новой группы")
                      .form_buttons
                        button.about_form__buttons.change.about_form__btn(type="button")
                      .form_buttons--active.about_form__btns
                        button.about_form__buttons.accept.about_form__btn(type="button")
                        button.about_form__buttons.decline.about_form__btn(type="button")
                    ul.about_form__skills
                      -for(var a=0; a< 4; a++)
                        li.about_form__skill
                          label(class="skill_wrap"+ " about_form__row" + ((a===2) ? " form_row--active" : '')) 
                            input.skill_input.skill_name.about_form__input(placeholder="Git")
                            .percent_wrap.skill__percent_wrap
                              input.skill_input.skill_percent.about_form__percent.about_form__input(type="number" min="0" max="100")
                            .form_buttons
                              button.about_form__buttons.change.about_form__btn(type="button")
                              button.about_form__buttons.remove.about_form__btn(type="button")
                            .form_buttons--active.about_form__btns
                              button.about_form__buttons.accept.about_form__btn(type="button")
                              button.about_form__buttons.decline.about_form__btn(type="button")
                    label.about_form__description.about_form__row
                      input.description_input.description_name.about_form__input(placeholder="Новый навык")
                      .percent_wrap.description__percent_wrap
                        input.description_input.description_percent.about_form__input.about_form__percent(type="number" min="0" max="100")
                      button.description__add_btn.admin_about__add_btn
          section#admin_works.admin_section
            .admin_section__container
              .admin_panel__title Блок "Работы"
              .works_edit.admin_edit__block
                .works_edit__title.admin_edit__title Редактирование работы
                .works_edit__content.admin_edit__content
                  .works_edit__download.works_edit__content_block
                    .works_edit__download_text Перетащите или загрузите для загрузки изображения
                    button(type="button").admin_edit__button.works_edit__download_button Загрузить
                  form.works_form.works_edit__content_block
                    label.works_form__row.admin_form__row
                      .works_form__row-title.admin_form__row-title Название
                      input.works_form__row-input.admin_form__row-input(value="Дизайн сайта для авто салона Porsche")
                    label.works_form__row.admin_form__row
                      .works_form__row-title.admin_form__row-title ССылка
                      input.works_form__row-input.admin_form__row-input(value="https://www.porsche-pulkovo.ru")
                    label.works_form__row.admin_form__row
                      .works_form__row-title.admin_form__row-title Описание
                      textarea.works_form__row-input.works_form__row-textarea.admin_form__row-textarea.admin_form__row-input(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
                    label.works_form__row.admin_form__row
                      .works_form__row-title.admin_form__row-title Добавление тэга
                      input.works_form__row-input.admin_form__row-input(value="Jquery, Vue.js, HTML5")
                    ul.works_form__tag_list
                      -for(i=0; i < 3; i++)
                        li.works_form__tag_item
                          .div HTML5
                          .tag_item__btn
                    .works_form__btns.admin_form__btns
                      button.admin_edit__button.form__reset(type="reset") Отмена
                      button.admin_edit__button.form__save(type="submit") Сохранить
              .admin_works__list.admin_block__list
                .add_works.add_block.admin_works__item.admin_block__item
                  a(href="#").add_block__btn
                  .add_block__text Добавить Работу
                - for(let i =0;i <4; i++)  
                  div(class="admin_works__item" + ((i===0) ? ' admin_works__item--active' : ''))
                    .admin_works__item_img
                      img(src="../images/content/2.jpg").admin_works__item_pic
                      ul.admin_works__item_list
                        - for(let i =0; i <3; i++)
                          li.admin_works__item_item HTML

                    .admin_works_item_inf
                      .admin_works__item_title Сайт школы образования
                      .admin_works__item_description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a.admin_works__item_link(href="http://loftschool.ru") http://loftschool.ru
                      .admin__item_btns
                        button(type="button").admin__item_change.admin__item_btn Править
                        button(type="button").admin__item_remove.admin__item_btn Удалить
          section#admin_rewiews.admin_section
            .admin_section__container
              .admin_panel__title Блок "Отзывы"
              .rewiews_edit.admin_edit__block
                .rewiews_edit__title.admin_edit__title Новый отзыв
                .rewiews_edit__content.admin_edit__content
                  .rewiews_edit__download
                    .rewiews_edit__download-img
                    .rewiews_edit__download-title Добавить фото  

                  form.rewiews_form
                    .rewiews__author
                      label.rewiews_form__row.admin_form__row
                        .works_form__row-title.admin_form__row-title Имя Автора
                        input.works_form__row-input.admin_form__row-input(value="Ковальчук Дмитрий")
                      label.rewiews_form__row.admin_form__row
                        .works_form__row-title.admin_form__row-title Титул автора
                        input.works_form__row-input.admin_form__row-input(value="Основатель LoftSchool")
                    label.rewiews_form__row.admin_form__row
                      .rewiews_form__row-title.admin_form__row-title Описание
                      textarea.rewiews_form__row-input.rewiews_form__row-textarea.admin_form__row-textarea.admin_form__row-input(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
                    .rewiews_form__btns.admin_form__btns
                      button.admin_edit__button.form__reset(type="reset") Отмена
                      button.admin_edit__button.form__save(type="submit") Сохранить
              .admin_rewiews__list.admin_block__list
                .add_rewiew.add_block.admin_rewiews__item.admin_block__item
                  a(href="#").add_block__btn
                  .add_block__text Добавить отзыв
                - for(let i =0; i < 4; i++)
                  .add_rewiew.admin_rewiew__item.admin_block__item
                    .add_rewiew__author
                      .add_rewiew__img
                        img(src="../images/content/rewiews-1.png").add_rewiew__pic
                      .add_rewiew__init
                        .add_rewiew__name Владимир Сабанцев
                        .add_rewiew__title Преподователь
                    .add_rewiew__inf
                      .add_rewiew__description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                      .admin__item_btns
                          button(type="button").admin__item_change.admin__item_btn Править
                          button(type="button").admin__item_remove.admin__item_btn Удалить 
          .alert_messages__container
            .alert_messages.alert_messages__success
              .alert_messages__text Сообщение отправлено
              button(type="button").alert_messages__button.button__close
            .alert_messages.alert_messages__overload
              .alert_messages__text Сервер перегружен
              button(type="button").alert_messages__button.button__close
            .alert_messages.alert_messages__error
              .alert_messages__text Сообщение не отправлено
              button(type="button").alert_messages__button.button__close
</template>


<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/fonts";
@import "../styles/layout/base";

body {
  color: $text-black;
}

//КНОПКА КРЕСТИК
  .button__close{
    width:30px;
    height:30px;
    &::after{
      position:absolute;
      content:'';
      width:20px;
      height:20px;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
          background: svg-load(
          "remove.svg",
          fill=$text-white,
          width=100%,
          height=100%
        )
        center center no-repeat;
    }
  }


.alert_messages__container{
  display:flex;
  .alert_messages{
    width:400px;
    height:75px;
    padding:0 20px 0 30px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    color:$text-white;
    font-size:18px;
    font-weight:600;
  }

  .alert_messages__button{
    position: relative;
    top:0;
    right:0;
  }

  .alert_messages__success{
    background-color: #4bb133;
  }

  .alert_messages__overload{
    background-color: #2d3c4e;
  }

    .alert_messages__error{
    background-color: #b13333;
  }

}

.admin_panel__container {
  position: relative;
  @include phones{
    padding-left:0;
    padding-right:0;
  }
  
}

.admin_welcome {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../images/content/musician.jpg") center center no-repeat;
  background-size: cover;

  .authorization {
    position: absolute;
    width: 560px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #fff;
    padding: 60px 80px;
    font-weight:600;
    @include tablets{
      width:100%;
      height:100%;
      top:0;
      left:0;
      transform:translate(0,0);
      padding:30px;
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

  .authorization__btn{
    width:350px;
    height:80px;
    font-size: 18px;
  }


  .athorization__close{
    position: absolute;
    display: block;
    top:30px;
    right:30px;
    width:30px;
    height:30px;
    &::after{
      position:absolute;
      content:'';
      width:20px;
      height:20px;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
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

.admin_header {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to right, #3e3e59, #454573);
}

.header_admin__container {
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
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
  @include phones {
    display: block;
  }
}

.header_admin__name {
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $text-white;
  @include phones {
    text-align: left;
    justify-content: flex-start;
  }
  &::before {
    content: "Панель администрирования";
    position: absolute;
    color: $text-white-opacity;
    font-size: 14px;
    white-space: nowrap;
    left: 200px;
    @include phones {
      display: none;
    }
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
  @include phones{
    justify-content:center;
  }
}

.admin_menu__item {
  padding: 30px;
  color: $blue;
}

.admin_menu__item--active {
  border-bottom: 3px solid $blue;
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
  @include phones{
    padding:0 30px;
  }
}

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

///Общие стили блоков
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
  @include phones{
    padding:0 30px 25px 30px;
  }
}

.admin_edit__content {
  width: 100%;
  display: flex;
  @include tablets {
    flex-direction: column;
    align-items: center;
  }
  @include phones{
    padding:30px;
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

/////////////#ADMIN_ABOUT
#admin_about {
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

  .admin_about__head {
    display: flex;
    align-items: center;
  }

  .admin_about__title {
    margin-right: 60px;
  }

  .admin_about__add {
    font-size: 16px;
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
    @include phones {
      grid-template-columns: auto;
    }
  }
  .admin_about__about_form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    width: 100%;
    min-height: 390px;
    padding: 30px;
    @include phones{
      padding: 30px 0;
    }
  }

  .about_form__input {
    border: none;
    outline: none;
  }

  .about_form__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about_form__name {
    padding: 0 10px 15px 10px;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
    @include phones {
      padding: 0 30px 15px 30px;
    }
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
    @include phones{
      padding:0 30px;
    }
  }

  .about_form__skills:not(:last-child) {
    margin-bottom: 10px;
  }

  .skill_wrap {
    width: 100%;
    display: flex;
    padding: 0 10px;
    @include phones {
      padding: 0;
    }
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
    @include phones{
      justify-content:center;
    }
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
      &:focus-within {
        border-color: $blue;
      }
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
    border: 1px dashed $admin-gray;
    height: 280px;
    display: flex;
    padding: 0 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #dee4ed;
    margin: 0 30px 0 0;
    @include tablets {
      margin: 0 0 55px 0;
    }
  }

  .works_edit__download_text {
    color: $admin-gray;
    line-height: 2.12;
    margin-bottom: 25px;
  }

  .works_form__row(:last-child) {
    margin-bottom: 20px;
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

  .admin_works__item{
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding-bottom:40px;
  }

  .admin_works__item--active{
    opacity: 0.5;
  }

  .admin_works__item_img {
    position:relative;
    margin-bottom: 40px;
  }

  .admin_works__item_pic {
    max-width: 100%;
    max-height: 100%;
  }

  .admin_works__item_list{
    position: absolute;
    display: flex;
    bottom:10px;
    right:10px;
  }

  .admin_works__item_item{
    color:$admin-black;
    font-size:13px;
    display:flex;
    padding:8px 15px;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    border-radius:15px;

  }

  .admin_works__item_item:not(:last-child){
    margin-right:8px;
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

#admin_rewiews {
  .rewiews_edit__download {
    margin: 0 30px 0 0;
    text-align: center;
    color: $blue;
    @include phones {
      margin: 0 0 40px 0;
    }
  }

  .rewiews_edit__download-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #dee4ed;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 100px;
      height: 100px;
      background: svg-load("user.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }
  }

  .rewiews_form {
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
    padding:30px 0;
  }

  .add_rewiew__author {
    width: 100%;
    padding: 0px 30px 30px 30px;
    border-bottom: 1px solid $admin-gray;
    margin-bottom: 30px;
    display: flex;
    @include phones{
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
    object-fit: cover;
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


