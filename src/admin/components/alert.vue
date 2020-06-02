<template lang="pug">
  .alert_messages__container
    .alert_messages(:class='type')
      .alert_messages__text {{text}}
      button(type="button" @click='closeTooltip').alert_messages__button.button__close
</template>



<script>
import { mapActions, mapState} from 'vuex';
export default {
  computed:{
    ...mapState('tooltips',{
      text : state => state.text,
      type: state => state.type
    })
  },
  methods:{
    ...mapActions('tooltips', ['closeTooltip'])
  }
}
</script>



<style lang="postcss" scoped>
.alert_messages__container {
  position: fixed;
  bottom:0;
  left:0;
  width:100%;
  display:flex;
  justify-content: center;
  transform:translateY(100%);
  transition: all 0.2s ease-in-out;
    &.visible{
      transform:translateY(0);
      transition: all 0.2s ease-in-out
    }
}
  .alert_messages {
    width: 400px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $text-white;
    font-size: 18px;
    font-weight: 600;
    &.success {
      background-color: #4bb133;
    }

    &.overload {
      background-color: #2d3c4e;
    }

    &.error {
      background-color: #b13333;
    }
  }

  .alert_messages__button {
    position: relative;
    top: 0;
    right: 0;
  }
</style>
