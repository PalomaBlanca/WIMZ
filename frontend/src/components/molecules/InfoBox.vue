<template>
    <div>
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name:"InfoBox",
    props: {
        headline: VueTypes.string,
        time: VueTypes.string,
        comment: VueTypes.string,
        target: VueTypes.string.isRequired,
    }
}
</script>

<style lang="scss" scoped>

</style>