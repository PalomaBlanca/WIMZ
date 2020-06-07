<template>
    <div class="container">
        <form 
            class="row form-group" 
            @submit.prevent="sendTrain"
        >
            <label for="getTrainInput">Zug:</label>
            <input 
                id="getTrainInput"
                type="text" 
                class="col-12 form-control"
                aria-describedby="whichTrain" 
                placeholder="Welchen Zug suchst du?"
                v-model="getTrainInputValue"
            />
            <label for="getTargetOfTrainInput">Ziel:</label>
            <input
                id="getTargetOfTrainInput" 
                type="text"
                class="col-12 form-control"
                aria-describedby="targetOfrain" 
                placeholder="Wohin fährt der Zug?"
                v-model="getTargetOfTrain"
            />
            <button 
                type="submit" 
                class="col-12 btn btn-success"
            >
                <svg class="bi bi-lightning-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd"/>
                </svg>
                Info erhalten
            </button>
        </form>
    </div>
</template>

<script>
import searchingForTrain from '@/js/api/searchingForTrainApi';

import store from '@/store/store';

export default {
    name: 'FormGetInfo',
    store,
    data() {
        return {
            getTrainInputValue: '',
            getTargetOfTrain: '',
        }
    },

    methods: {
        async sendTrain() {
            this.$store.commit('setIsLoadingGetInfo', true)
            this.isLoading = true;
            const searchTrainResponse  = await searchingForTrain({
                getTrainInputValue: this.getTrainInputValue,
                getTargetOfTrain: this.getTargetOfTrain,
            });
            this.$store.commit('setMarkerOfTrain', searchTrainResponse)
            this.$store.commit('setIsLoadingGetInfo', false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';
.container {
    border: 2px dashed $border-color;
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.form-group {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.form-control {
    margin-bottom: 30px;
}
</style>
