<template>
    <div 
        class="row card-item rounded"
        :class="{'bg-success': userIsInTrain, 'bg-warning': !userIsInTrain}"
    >

        <div class="header col-12">
            <h5 class="headline mb-0">{{ headline }} nach {{ target }}</h5>
            <h6 class="subheadline mb-0 ml-auto mr-0">vor {{ time }}min</h6>
        </div>
        <p class="col-12 p-3">{{ comment }}</p>
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name:"InfoBox",
    props: {
        headline: VueTypes.string.isRequired,
        time: VueTypes.number,
        comment: VueTypes.string.def('kein Kommentar vorhanden :('),
        target: VueTypes.string.isRequired,
        userIsInTrain: VueTypes.bool.def(false),
    }
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';

h5 {
    color: white;
}

h6 {
    color: lightgray;
}

.card-item {
    background-color: $highlighting-color;
}

.header {
    border-bottom: 1px solid lightgray;
    display: flex;
    padding: 15px;
}

</style>