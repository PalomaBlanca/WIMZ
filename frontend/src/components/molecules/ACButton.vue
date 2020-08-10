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
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.button {
  border-radius: 100px;
  background-color: $main-white;
  min-height: 100px;
  min-width: 100px;
}
</style>
