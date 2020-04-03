<template>
    <div class="container">
        <template v-for="(item, index) in infoList">
        <info-box 
            class="info-box"
            :key="index"
            :headline="item.label" 
            :time="item.lastUpdate"
            :comment="item.comment"
            :userIsInTrain="item.userIsInTrain"
            :target="item.to"
        />
        </template>
    </div>
</template>

<script>
import InfoBox from '@/components/molecules/InfoBox';
import store from '@/store/store.js'

export default {
    store,
    name: 'InfoList',
    components: {
        InfoBox,
    }, 

    computed: {
        infoList() {
            return this.$store.getters.markersOfTrain;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';

.info-box {
    margin: 15px;
}
</style>