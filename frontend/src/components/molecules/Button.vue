<template>
    <button class="button" type="button" @click="onClick">
        <slot>
        </slot>
    </button>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'Button',
    props: {
        onClick: VueTypes.func.isRequired,
    },
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.button {
 background-color: transparent;
 color: $highlighting-color;
 font-weight: bold;
 border: 3px solid $highlighting-color;
 border-radius: 20px;
 padding: 10px;
 padding-left: 15px;
 padding-right: 15px;
 height: 40px;
     &:hover {
        border-color: $focus-color;
        color: $focus-color;
        background-color: $focus-background-color;
    }
}
</style>
