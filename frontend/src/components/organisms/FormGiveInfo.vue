<template>
    <div class="container">
        <form 
              v-if="sendHelp === 0"
              class="row form-group"
              @submit.prevent="sendLocationAndTrain"
        >
            <label for="setTrainInput">Zug:</label>   
            <input
                id="setTrainInput" 
                type="text"
                class="col-12 form-control"
                aria-describedby="whichTrain" 
                placeholder="In welchen Zug? (z.B. RE8)"
                v-model="setTrainInputValue"
            />
            <label for="setTargetOfTrainInput">Ziel:</label>            
            <input
                id="setTargetOfTrainInput" 
                type="text"
                class="col-12 form-control"
                aria-describedby="targetOfrain" 
                placeholder="Wohin fährt der Zug?"
                v-model="setTargetOfTrain"
            />
            <label for="comment">Zusätliche Infos:</label>
            <textarea class="col-12 form-control" id="comment" rows="6" v-model="setTrainComment"></textarea>
            
            <label class="col-8 label-toggle-button">Bist du im Zug?</label>
            <div class="col text-right">
                <label class="switch">
                    <input name="comment" type="checkbox" v-model="userIsInTrain">
                    <span class="slider"></span>
                </label>
            </div>

            <button 
                type="submit" 
                class="col-12 btn btn-danger"
            >
                <svg class="bi bi-geo" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path d="M7.5 4h1v9a.5.5 0 01-1 0V4z"/>
                    <path fill-rule="evenodd" d="M6.489 12.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z" clip-rule="evenodd"/>
                </svg>
                Meldung abschicken
            </button>
            <location-handler v-if="userIsInTrain"/>
        </form>
        <div v-else-if="sendHelp === 1">
            <p> Vielen Dank für deine Hilfe! </p>
        </div>
        <div v-else>
            <p> Das tut uns sehr leid. Da ist etwas in der Kommunikation schief gelaufen. Bitte versuche es einfach nochmal. </p>
        </div>
    </div>
</template>

<script>
import LocationHandler from '@/components/molecules/LocationHandler';
import trainAndLocation from '@/js/api/trainAndLocationApi';

import store from '@/store/store';

export default {
    name: 'FormGiveInfo',

    store,

    components: {
        LocationHandler
    },

    data() {
        return {
            setTrainInputValue: '',
            getTrainInputValue: '',
            setTargetOfTrain: '',
            getTargetOfTrain: '',
            setTrainComment: '',
            userIsInTrain: false,
            trainAndLocationResponse: '',
            sendHelp: 0, //0 show form, 1 form send was successful, -1 server responded with error
        }
    },

    computed: {
        checkUserGeoResponse() {
            if(this.$store.getters.currentLocation.lat === 0 && this.$store.getters.currentLocation.lng === 0) {
                this.userIsInTrain = false;
            }
            return this.userIsInTrain;
        }
    },

    methods: {
        async sendLocationAndTrain() {
            this.trainAndLocationResponse = 
            await trainAndLocation({
                name: this.setTrainInputValue,
                targetStation: this.setTargetOfTrain,
                comment: this.setTrainComment,
                userIsInTrain: this.checkUserGeoResponse,
                lat: this.$store.getters.currentLocation.lat || null,
                lng: this.$store.getters.currentLocation.lng || null
            });
            if(this.trainAndLocationResponse.status === "success") {
                this.sendHelp = 1;
            } else if (this.trainAndLocationResponse.status === "failed" || !this.trainAndLocationResponse) {
                this.sendHelp = -1;
            }
        },
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

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 28px;
  margin-right: -15px;
  margin-bottom: 30px;
  border-radius: 5px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #C82333;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 3px;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(12px);
}
.label-toggle-button {
    margin-left: -15px;
}
</style>
