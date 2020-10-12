<template>
    <button class="button" type="button">
        <slot>
        </slot>
    </button>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'Button',
    props: {

    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background: linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.1));
  box-shadow: 7px 10px 20px 4px rgba(0, 0, 0, 0.4), -8px -8px 20px 7px rgba(255, 255, 255, 0.15);
  border: none;
  background-color: $main-blue;
  color: $button-color;


    & + & {
      margin-left: 50px;
    }

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
                  inset -6px -6px 10px 0 rgba(255, 255, 255, 0.15);
      background: linear-gradient(-45deg, rgba(255,255,255,0.15), rgba(0,0,0,0.15));
    }

}

</style>
