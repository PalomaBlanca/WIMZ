<template>
    <div class="row">
        <div class="col-6">
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
        <div class="col-6">
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
export default {
    name: 'Form',
    data() {
        return {
            setTrainInputValue: '',
            getTrainInputValue: ''
        }
    },
    components: {
        Button,
    },
    methods: {
        sendLocationAndTrain() {
            //console.log("send location and train to backend: ", this.setTrainInputValue);
        },
        sendTrain() {
            //console.log("send train to backend: ", this.getTrainInputValue);
        }
    }
}
</script>

<style lang="scss" scoped>
.inputFieldStart {
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: lightblue;
    padding: 6px;
}
</style>