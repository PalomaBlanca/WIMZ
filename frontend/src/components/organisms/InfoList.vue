<template>
    <div class="container">
        <loading-state v-if="loading"/>
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

        <label> Legende: </label>
        <div class="legend">            
            <div class="legend-item">
                <div style="height: 12px; width: 12px;" class="bg-success"></div>
                <p class="ml-2 mb-0">
                    Diese Info stammt aus dem Zug. 
                </p>
            </div>
            <div class="legend-item ml-3">
                <div style="height: 12px; width: 12px;" class="bg-warning"></div>
                <p class="ml-2 mb-0">
                    Diese Info wurde außerhalb des Zuges erfasst.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import InfoBox from '@/components/molecules/InfoBox';
import LoadingState from '@/components/molecules/LoadingState';
import store from '@/store/store.js'

export default {
    store,
    name: 'InfoList',
    components: {
        InfoBox,
        LoadingState,
    }, 
    
    data() {
        return {
            isLoading: false,
        }
    },

    computed: {
        infoList() {
            return this.$store.getters.markersOfTrain;
        },
        loading() {
            return this.isLoading;
        }
    },

    mounted() {
        this.$store.watch(
            (state, getters) => getters.isLoadingGetInfo,
            (newValue) => {
                this.isLoading = newValue;
            },
        );
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

.info-box {
    margin: 15px;
}

.legend {
    display: flex;
}

.legend-item {
    display: flex;
    align-items: center;
}
</style>
