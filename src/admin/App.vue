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

  .admin_section__container {
    width:100%;
    padding-top: 60px;
    padding-bottom: 60px;
  }

///Title

.admin_panel__title {
  font-size: 21px;
  font-weight: 700;
  color: $text-black;
  margin-bottom: 60px;
}

.add_block{
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color:#fff;
  .add_works__btn{
    width: 150px;
    height:150px;
    border-radius:50%;
    border:2px solid #fff;
    position: relative;
    margin-bottom:30px;
    &::after{
      content: '';
      position:absolute;
      width:35px;
      height:35px;
      transform:translate(-50%,-50%) rotate(-45deg);
      top:50%;
      left:50%;
      background: svg-load("remove.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }
  }
  .add_works__text {
  word-wrap: break-word;
  }
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


  .admin_about__head {
    display: flex;
    align-items: center;
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
  font-weight: 600;
  color:$admin-black;
  .works_edit__button{
    width:180px;
    color:$text-white;
    font-weight:700;
    border-radius:25px;
    padding:20px 45px;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
  }
  .works_edit{
    padding:30px;
    margin-bottom:30px;
    .works_edit__title{
      width:100%;
      padding: 0 10px 25px 10px;
      border-bottom:1px solid $admin-gray;
      color:$admin-black;
      font-weight:700;
      margin-bottom:50px;
    }
    .works_edit__content{
      width:100%;
      display:flex;
    }

    .works_edit__content_block{
      width:49%;
    }

    .works_edit__download{
      border:1px dashed $admin-gray;
      height:280px;
      display:flex;
      padding:0 80px;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      background-color: #dee4ed;
      margin-right:30px;
    }

    .works_edit__download_text{
      color:$admin-gray;
      line-height: 2.12;
      margin-bottom:25px;
    }


    .works_form__row{
      width:100%;
      display: block;
      margin-bottom:30px;
    }

    .works_form__row:not(:last-child){
      margin-bottom:30px;
    }
    .works_form__row(:last-child){
      margin-bottom:20px;
    }

    .works_form__row-title{
      color:$admin-gray;
      margin-bottom:20px;
    }

    .works_form__row-input{
      width:100%;
      border:none;
      border-bottom:1px solid $admin-black;
      padding-bottom:20px;
    }

    .works_form__row-textarea{
      resize: none;
      height: 150px;
      padding:20px 80px 20px 20px;
      border:1px solid $admin-gray;
    }

    .works_form__tag_list{
      display: flex;
      margin-bottom:40px;
    }

    .works_form__tag_item{
      display: flex;
      align-items: center;
      padding:20px 10px;
      color:$admin-gray;
    }

    .tag_item__btn{
      position: relative;
      margin-left:10px;
      width:10px;
      height:10px;
      &::after{
        position:absolute;
        width:100%;
        height:100%;
        content:'';
        background: svg-load("remove.svg", fill=#414c63, width=100%, height=100%)
        center center no-repeat;

      }
    }

    .works_form_btns{
      display: flex;
      justify-content: flex-end;
    }

    .works_form__reset{
      color:$blue;
      background-image:none;
      background:#fff;
    }









  }

  .admin_works__list{
    display: grid;
    width:100%;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-gap: 30px 30px;
  }

  .admin_works__item_img{
    margin-bottom:40px;
  }

  .admin_works__item_pic{
    max-width:100%;
    max-height:100%;
  }

  .admin_works_item_inf{
    padding:0 30px;
  }

  .admin_works__item_title{
    font-weight: 18px;
    font-weight: bold;
    margin-bottom:25px;
  }

  .admin_works__item_description{
    line-height: 1.88;
    margin-bottom:20px;
  }

  .admin_works__item_link{
    display: block;
    color:$blue;
    margin-bottom:45px;
  }


  .admin_works__item_btns{
    width:100%;
    display: flex;
    justify-content: space-between;
  }

  .admin_works__item_btn{
    position: relative;
    display: flex;
    align-items: center;
    color:$admin-gray;
    padding-right:30px;
    padding-left:0;
    &::after{
      right:0;
      position:absolute;
      content:'';
      width:15px;
      height:15px;
    }
  }

  .admin_works__item_remove{
    &::after{
       background: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%)
        center center no-repeat;
    }
  }

    .admin_works__item_change{
    &::after{
       background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%)
        center center no-repeat;
    }
  }

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
            .container.admin_section__container.admin_about__container
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
            .admin_section__container
              .admin_panel__title.ad Блок "Работы"
              .works_edit
                .works_edit__title Редактирование работы
                .works_edit__content
                  .works_edit__download.works_edit__content_block
                    .works_edit__download_text Перетащите или загрузите для загрузки изображения
                    button(type="button").works_edit__button.works_edit__download_button Загрузить
                  form.works_form.works_edit__content_block
                    label.works_form__row
                      .works_form__row-title Название
                      input.works_form__row-input(value="Дизайн сайта для авто салона Porsche")
                    label.works_form__row
                      .works_form__row-title ССылка
                      input.works_form__row-input(value="https://www.porsche-pulkovo.ru")
                    label.works_form__row
                      .works_form__row-title Описание
                      textarea.works_form__row-input.works_form__row-textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
                    label.works_form__row
                      .works_form__row-title Добавление тэга
                      input.works_form__row-input(value="Jquery, Vue.js, HTML5")
                    ul.works_form__tag_list
                      -for(i=0; i < 3; i++)
                        li.works_form__tag_item
                          .div HTML5
                          .tag_item__btn
                    .works_form_btns
                      button.works_edit__button.works_form__reset(type="reset") Отмена
                      button.works_edit__button.works_form__save(type="submit") Сохранить
              ul.admin_works__list
                li.add_works.add_block.admin_works__item
                  a(href="#").add_works__btn
                  .add_works__text Добавить Работу
                - for(let i =0;i <4; i++)  
                  li.admin_works__item
                    .admin_works__item_img
                      img(src="../images/content/2.jpg").admin_works__item_pic
                    .admin_works_item_inf
                      .admin_works__item_title Сайт школы образования
                      .admin_works__item_description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a.admin_works__item_link(href="http://loftschool.ru") http://loftschool.ru
                      .admin_works__item_btns
                        button(type="button").admin_works__item_change.admin_works__item_btn Править
                        button(type="button").admin_works__item_remove.admin_works__item_btn Удалить




                
                




                

            
        
      
</template>



