<template>
  <div>
    <form
          @submit.prevent="sendLocationAndTrain"
    >
        <label for="setTargetOfTrainInput">
          Start:
        </label>
        <ACAutocomplete
          :listData="DBStationsResponse"
          @newInput="inputStationHandler"
          @setChoice="setStartOfInput"
          :isAsync="true"
        />

        <label for="setTargetOfTrainInput">
          Ziel:
        </label>
        <ACAutocomplete
          :listData="DBStationsResponse"
          @newInput="inputStationHandler"
          @setChoice="setTargetOfInput"
          :isAsync="true"
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
import DBStationArrivalBoard from '@/js/api/getDBStationArrivalBoard';
import trainAndLocation from '@/js/api/trainAndLocationApi';
import ACAutocomplete from '@/components/molecules/ACAutocomplete';
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
    },

    data() {
      return {
        setTrainComment: "",
        setTrain: "",
        setTargetOfTrain: "",
        DBStationsResponse: [],
        DBStationArrivalBoard: [],
        trainInputIsDisabled: true,
      }
    },

    computed: {
      allArrivingTrains() {
        var filteredTrainList = new Array();
        this.DBStationArrivalBoard.forEach((item) => {
            filteredTrainList.push(
              {
                name: item.name,
                id: item.detailsId
              }
            )
        });
        return filteredTrainList;
      }
    },

    methods: {

      inputStationHandler: debounce(function(query) {
          this.sendStationSearch(query);
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

      async sendStationSearch(query) {
        if(query.length > 2) {
          this.DBStationsResponse = await DBStationsApi(query);
        }
      },

      async checkTrainByTarget(id) {
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        this.DBStationArrivalBoard = await DBStationArrivalBoard(id, date);
      },

      setTargetOfInput(target) {
        this.setTargetOfTrain = target;
        this.checkTrainByTarget(target.id);
        this.trainInputIsDisabled = false;
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
