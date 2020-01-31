<template>
    <div>
        <div class="col-sm-5 input-wrapper">
            <input
                id="setTrainInput" 
                type="text"
                class="inputFieldStart"
                placeholder="In welchen Zug steigst du ein?"
                v-model="setTrainInputValue"
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
        }
    },
    components: {
        Button,
    },
    methods: {
        async sendLocationAndTrain() {
            await trainAndLocation(this.$store.getters.currentLocation);
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
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: transparent;
    color: $highlighting-color;
    border: 3px solid $highlighting-color;
    padding: 10px;
    padding-left: 15px;
    height: 40px;
    border-right: 3px dotted $highlighting-color;
}
</style>