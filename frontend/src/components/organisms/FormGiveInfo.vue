<template>
    <div>
                    <input
                id="setTrainInput" 
                type="text"
                class="inputFieldStart"
                placeholder="In welchen Zug?"
                v-model="setTrainInputValue"
            />            
            <input
                id="setTargetOfTrainInput" 
                type="text"
                class="inputFieldStart"
                placeholder="Wohin fährt der Zug?"
                v-model="setTargetOfTrain"
            />
            <button 
                :onClick="sendLocationAndTrain"
            >
                EINSTEIGEN
            </button>
    </div>
</template>

<script>
import Button from '@/components/molecules/Button'
import Scrollbar from '@/components/molecules/Scrollbar'
import searchingForTrain from '@/js/api/searchingForTrainApi';
import trainAndLocation from '@/js/api/trainAndLocationApi';

import { store } from '@/store/store';

export default {
    name: 'Form',
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