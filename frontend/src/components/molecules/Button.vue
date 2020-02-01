<template>
    <button class="button left-item" type="button" @click="onClick">
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
        leftItem: VueTypes.bool.def(false)
    },
}
</script>
<style lang="scss" scoped>
@import '../../css/utils.scss';

.button {
 background-color: transparent;
 color: $highlighting-color;
 font-weight: bold;
 border: none;
 padding-top: 5px;
 padding-bottom: 5px;
 padding-left: 10px;
 padding-right: 10px;
}
.left-item{
    border-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 40px;
    border: 3px solid $highlighting-color;
    border-left: none;
    &:hover {
        border-color: $focus-color;
        color: $focus-color;
        background-color: $focus-background-color;
    }
}
</style>