<template>
    <perfect-scrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHandle">
        <slot>
        </slot>
    </perfect-scrollbar>
</template>

<script>
import PerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    name: 'Scrollbar',
    components: {
        PerfectScrollbar,
    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>