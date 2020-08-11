<template>
    <button class="button" :class="[{ buttonLeft: left }, buttonRight]" type="button">
        <slot>
        </slot>
    </button>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'Button',
    props: {
      left: VueTypes.boolean,
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.button {
  background-color: $main-white;
  min-height: 100px;
  width: 100%;
  border: none;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.buttonLeft {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

</style>
