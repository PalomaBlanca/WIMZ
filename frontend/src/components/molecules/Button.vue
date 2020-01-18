<template>
    <button class="button" :type="type">
        <slot>
        </slot>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        type: ''
    },
}
</script>
<style lang="scss" scoped>
.button {
 border-radius: 5px;
 background-color: red;
 color: white;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight: bold;
 border: none;
 padding-top: 5px;
 padding-bottom: 5px;
 padding-left: 10px;
 padding-right: 10px;
}
</style>