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
}

</style>
