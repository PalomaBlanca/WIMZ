<template>
  <div>
    <form
          @submit.prevent="sendSearchString"
    >
        <label for="setTargetOfTrainInput">
          Ziel:
        </label>
        <ACAutocomplete
          :items="DBStationsResponse"
          @newInput="sendSearchString"
          @setChoice="setTargetOfInput"
        />

        <label for="setTrainInput">
          Zug:
        </label>
        <ACAutocomplete
          :items="allArrivingTrains"
          @newInput=""
          @setChoice="setTrainOfInput"
          :isAsync="false"
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
import ACAutocomplete from '@/components/molecules/ACAutocomplete';
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
        console.log(filteredTrainList);
        return filteredTrainList;
      }
    },

    methods: {
      async sendSearchString(query) {
        this.DBStationsResponse = await DBStationsApi(query);
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
