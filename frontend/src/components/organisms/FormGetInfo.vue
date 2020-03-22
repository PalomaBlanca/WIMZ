<template>
    <div class="container">
        <div class="row form-group">
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
                type="button" 
                class="col-12 btn btn-success"
                :onClick="sendTrain"
            >
                <svg class="bi bi-lightning-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd"/>
                </svg>
                Info erhalten
            </button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/molecules/Button'
import Scrollbar from '@/components/molecules/Scrollbar'
import searchingForTrain from '@/js/api/searchingForTrainApi';
import trainAndLocation from '@/js/api/trainAndLocationApi';

import { store } from '@/store/store';

export default {
    name: 'FormGetInfo',
    store,
    data() {
        return {
            setTrainInputValue: '',
            getTrainInputValue: '',
            setTargetOfTrain: '',
            getTargetOfTrain: '',
        }
    },

    methods: {
        async sendLocationAndTrain() {
            let payload = 
            await trainAndLocation({
                name: this.setTrainInputValue,
                targetStation: this.setTargetOfTrain,
                lat: this.$store.getters.currentLocation.lat,
                lng: this.$store.getters.currentLocation.lng
            });
        },
        async sendTrain() {
            const searchTrainResponse  = await searchingForTrain(this.getTrainInputValue);
            this.$store.commit('setMarkerOfTrain', searchTrainResponse)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';
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