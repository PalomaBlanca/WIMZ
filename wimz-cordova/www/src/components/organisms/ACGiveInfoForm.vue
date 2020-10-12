<template>
  <div class="col-12">
    <form
          class="row"
          @submit.prevent="sendLocationAndTrain"
    >
        <div class="input-wrapper col-12 col-md-4">
          <i class="fa fa-map-marker icon map-marker"></i>
          <ACAutocomplete
            :listData="DBStartStationsResponse"
            @newInput="inputStartStationHandler"
            @setChoice="setStartOfInput"
            :isAsync="true"
            placeholder="Start"
            class="start-input"
          />
        </div>

        <div class="input-wrapper col-12 col-md-4">
          <i class="fa fa-map-marker icon map-marker"></i>
          <ACAutocomplete
            :listData="DBTargetStationsResponse"
            @newInput="inputTargetStationHandler"
            @setChoice="setTargetOfInput"
            :isAsync="true"
            placeholder="Ziel"
          />
        </div>



        <div class="input-wrapper col-12 col-md-4">
          <i class="fa fa-calendar icon calender-icon"></i>
          <ACDateTimePicker/>
        </div>

        <div class="input-wrapper col-12">
          <label for="comment">Zusätliche Infos:</label>
          <textarea class="form-control" id="comment" rows="6" v-model="setTrainComment"></textarea>
        </div>
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

.map-marker,
.calender-icon {
  position: absolute;
  font-size: 15px;
  color: $main-orange;
  z-index: 1;
  left: 30px;
  top: 16px;
}

.start-input {
  z-index: 0;
}

.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.form-control {
  @include typo-body;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  color: $main-white;
  height: 150px;
  width: 100%;
  border: none;
  background-color: $main-blue;
  box-shadow: inset 5px 6px 8px -2px rgba(0, 0, 0, 0.6),
              inset -4px -5px 10px 0 rgba(255, 255, 255, 0.2);
  border-radius: 40px;
}


</style>
