<template lang="pug">
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
                            img(src="~images/content/2.jpg").admin_works__item_pic
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
</template>



<script>
export default {};
</script>

<style lang="postcss" scoped>
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
    max-width: 100%;
    max-height: 100%;
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

