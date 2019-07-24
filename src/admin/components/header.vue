<template lang="pug">
    header.admin_header
        .container.header_admin__container
            .avatar
                img(src="~images/content/user.jpg").avatar_pic
            .header_admin__content
                .header_admin__name Константин Бульба
                a.header__admin_btn Выйти
</template>



<style lang="postcss" scoped>
@import "../../styles/mixins";
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
</style>
