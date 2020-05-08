<template>
    <div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 input-wrapper">
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
            <Button 
                :onClick="sendLocationAndTrain"
            >
                EINSTEIGEN
            </Button>
        </div>
        <div class="col input-wrapper">
            <input 
                id="getTrainInput"
                type="text" 
                class="inputFieldStart"
                placeholder="Welchen Zug suchst du?"
                v-model="getTrainInputValue"
            />
            <input
                id="getTargetOfTrainInput" 
                type="text"
                class="inputFieldStart"
                placeholder="Wohin fährt der Zug?"
                v-model="getTargetOfTrain"
            />
            <Button
                    :onClick="sendTrain"
            >
                FINDEN
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '../molecules/Button'
import Scrollbar from '../molecules/Scrollbar'
import searchingForTrain from '../../js/api/searchingForTrainApi';
import trainAndLocation from '../../js/api/trainAndLocationApi';

import { store } from '../../store/store';

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
    components: {
        Button,
        Scrollbar,
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
@import '../../css/utils.scss';

.input-wrapper {
    padding-bottom: 20px;
}

.inputFieldStart {
    border-radius: 20px;
    background-color: transparent;
    color: $highlighting-color;
    border: 3px solid $highlighting-color;
    padding: 10px;
    padding-left: 15px;
    height: 40px;
}
</style>