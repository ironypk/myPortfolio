<template lang="pug">
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



<style lang="postcss" scoped>
.alert_messages__container {
  display: flex;
  .alert_messages {
    width: 400px;
    height: 75px;
    padding: 0 20px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $text-white;
    font-size: 18px;
    font-weight: 600;
  }

  .alert_messages__button {
    position: relative;
    top: 0;
    right: 0;
  }

  .alert_messages__success {
    background-color: #4bb133;
  }

  .alert_messages__overload {
    background-color: #2d3c4e;
  }

  .alert_messages__error {
    background-color: #b13333;
  }
}
</style>
