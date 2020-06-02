<template lang="pug">
  nav.admin_menu
    ul.admin_menu__list
      li.admin_menu__item(v-for="tab in tabs")
        router-link(
          :data-text="tab.title"
          :to="tab.href"
          exact-active-class='admin_menu__link--active'
        ).admin_menu__link
</template>



<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Отзывы", href: "/rewiews" }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins";
.admin_menu {
  padding: 0 60px;
  color: $text-black-opacity;
}

.admin_menu__list {
  display: flex;
  @include phones {
    justify-content: center;
  }
}

.admin_menu__item {
  color: $blue;
}

.admin_menu__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  padding: 30px;

  @include phones {
    width: 100px;
  }

  &:before {
    content: attr(data-text);
  }

  &:hover,
  &--active {
    color: $blue;
    font-weight: 600;
    border-bottom: 3px solid $blue;
  }
}
</style>

