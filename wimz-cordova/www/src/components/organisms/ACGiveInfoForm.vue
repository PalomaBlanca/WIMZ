<template>
  <div class="col-12">
    <form
          @submit.prevent="sendLocationAndTrain"
    >
        <label for="setTargetOfTrainInput">
          Start:
        </label>
        <ACAutocomplete
          :listData="DBStartStationsResponse"
          @newInput="inputStartStationHandler"
          @setChoice="setStartOfInput"
          :isAsync="true"
        />

        <label for="setTargetOfTrainInput">
          Ziel:
        </label>
        <ACAutocomplete
          :listData="DBTargetStationsResponse"
          @newInput="inputTargetStationHandler"
          @setChoice="setTargetOfInput"
          :isAsync="true"
        />

        <label for="setTargetOfTrainInput">
          Datum & Zeit:
        </label>
        <ACDateTimePicker
        />

        <label for="comment">Zusätliche Infos:</label>
        <textarea class="col-12 form-control" id="comment" rows="6" v-model="setTrainComment"></textarea>

        <button
            type="submit"
            class="col-12 btn btn-danger"
        >
            Meldung abschicken
        </button>
    </form>
  </div>
</template>
<script>
import VueTypes from 'vue-types';
import DBStationsApi from '@/js/api/getDBStations';
import trainAndLocation from '@/js/api/trainAndLocationApi';
import ACAutocomplete from '@/components/molecules/ACAutocomplete';
import ACDateTimePicker from '@/components/molecules/ACDateTimePicker';
import { debounce } from 'debounce';
/*
*
* Checken wenn der Nutzer seine Eingabe mit I oder EC beginnt Vorschlagliste aus API Call nehmen
* Ansonsten jede Eingabe akzeptieren, da RE (Nahverkehr) wohl noch nicht unterstützt wird vom DB arrivalBoard
*
*/
export default {
    name: 'ACGiveInfoForm',

    components: {
      ACAutocomplete,
      ACDateTimePicker,
    },

    data() {
      return {
        setTrainComment: "",
        setStartOfTrain: "",
        setTrain: "",
        setTargetOfTrain: "",
        DBTargetStationsResponse: [],
        DBStartStationsResponse: [],
      }
    },

    methods: {

      inputStartStationHandler: debounce(function(query) {
          var isStart = true;
          if(query.length > 2) {
            this.sendStationSearch(query, isStart);
          }
      }, 300),

      inputTargetStationHandler: debounce(function(query) {
          var isStart = false;
          if(query.length > 2) {
            this.sendStationSearch(query, isStart);
          }
      }, 300),

      async sendLocationAndTrain() {
          this.trainAndLocationResponse =
          await trainAndLocation({
              name: this.setTrain,
              targetStation: this.setTargetOfTrain,
              comment: this.setTrainComment,
              lat: this.$store.getters.currentLocation.lat || null,
              lng: this.$store.getters.currentLocation.lng || null
          });
      },

      async sendStationSearch(query, isStart) {
          if(isStart) {
            this.DBStartStationsResponse = await DBStationsApi(query);
          } else {
            this.DBTargetStationsResponse = await DBStationsApi(query);
          }
      },

      setTargetOfInput(target) {
        this.setTargetOfTrain = target;
      },

      setStartOfInput(start) {
        this.setStartOfTrain = start;
      },

      setTrainOfInput(train) {
        this.setTrain = train;
      }
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';


</style>
