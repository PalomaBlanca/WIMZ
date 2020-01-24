<template>
    <div class="row">
        <div class="col-sm-12">
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
        <div class="col-sm-12">
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
//import searchingForTrain from '../../js/api/searchingForTrainApi';
import trainAndLocation from '../../js/api/trainAndLocationApi';

export default {
    name: 'Form',
    data() {
        return {
            setTrainInputValue: '',
            getTrainInputValue: '',
            currentPosition: {
                lat: 0,
                lng: 0,
            }
        }
    },
    components: {
        Button,
    },
    mounted(){
        this.getLocation();
    },
    methods: {
        getLocation() {
            if (navigator.geolocation) {
                try{
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                } catch(e) {
                    //console.log(e)
                }
            } else {
                //console.log('Ihr Browser unterstützt keine Geolocation.');
            }

        },
        showPosition(position) {
            this.currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        },
        async sendLocationAndTrain() {
            if(this.currentPosition.lat !== 0 && this.currentPosition.lng !== 0) {
                await trainAndLocation(this.currentPosition);
            }
        },
        async sendTrain() {
            //const searchTrainResponse  = await searchingForTrain(this.getTrainInputValue);
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