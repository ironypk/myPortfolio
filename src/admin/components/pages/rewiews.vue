<template lang="pug">
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
                              img(src="../../../images/content/rewiews-1.png").add_rewiew__pic
                          .add_rewiew__init
                            .add_rewiew__name Владимир Сабанцев
                            .add_rewiew__title Преподователь
                        .add_rewiew__inf
                          .add_rewiew__description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                          .admin__item_btns
                              button(type="button").admin__item_change.admin__item_btn Править
                              button(type="button").admin__item_remove.admin__item_btn Удалить 
</template>


<script>
export default {};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins";
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

