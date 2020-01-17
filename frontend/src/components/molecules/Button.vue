<template>
    <button :type="type">
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

</style>