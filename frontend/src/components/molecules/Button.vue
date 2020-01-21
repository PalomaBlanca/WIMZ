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
.button {
 background-color: green;
 color: white;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
}
</style>