<template>
  <div class="col-12">
    <form
          class="row"
          @submit.prevent="emitUserInput"
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
          <ACDateTimePicker
            @newDate="setDeparture"
          />
        </div>

        <div class="input-wrapper col-12">
            <i class="fa fa-info-circle icon info-icon"></i>
            <textarea
              class="form-control"
              id="comment"
              rows="6"
              v-model="setTrainComment"
              placeholder="weitere Infos"
            ></textarea>

            <ACButton
                type="submit"
                class="find-journey-button"
            >
                <i class="fa fa-train" aria-hidden="true"></i>
            </ACButton>
        </div>
    </form>
  </div>
</template>
<script>
import VueTypes from 'vue-types';
import DBStationsApi from '@/js/api/getDBStations';
import DBJourneysApi from '@/js/api/getDBJourney';
import trainAndLocation from '@/js/api/trainAndLocationApi';
import ACAutocomplete from '@/components/molecules/ACAutocomplete';
import ACDateTimePicker from '@/components/molecules/ACDateTimePicker';
import ACButton from '@/components/molecules/ACButton';
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
      ACButton,
    },

    data() {
      return {
        setTrainComment: "",
        setStartOfTrain: "",
        setTrain: "",
        departure: "",
        setTargetOfTrain: "",
        DBTargetStationsResponse: [],
        DBStartStationsResponse: [],
      }
    },

    methods: {
      async emitUserInput() {
        this.$emit('journeys', await DBJourneysApi(this.setStartOfTrain.id, this.setTargetOfTrain.id, this.departure));
      },

      setDeparture(dateTime) {
        this.departure = dateTime;
      },

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

      // async sendLocationAndTrain() {
      //     this.trainAndLocationResponse =
      //     await trainAndLocation({
      //         name: this.setTrain,
      //         targetStation: this.setTargetOfTrain,
      //         comment: this.setTrainComment,
      //         lat: this.$store.getters.currentLocation.lat || null,
      //         lng: this.$store.getters.currentLocation.lng || null
      //     });
      // },

      async getJourneys() {
        return await DBJourneysApi(this.setStartOfTrain.id, this.setTargetOfTrain.id, this.departure)
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

.find-journey-button {
  height: 100px;
  margin-left: 40px;
  width: 130px;
  font-size: 30px;
  color: $main-orange;
}

.map-marker,
.calender-icon,
.info-icon {
  position: absolute;
  font-size: 15px;
  color: $main-orange;
  z-index: 3;
  left: 30px;
  top: 16px;
}

.info-icon {
  z-index: 1;
}

.start-input {
  z-index: 2;
}

.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.form-control {
  @include typo-regular-filled;
  z-index: 0;
  color: $main-white;
  font-size: 14px;
  padding: 15px;
  padding-left: 35px;
  height: 150px;
  width: 100%;
  border: none;
  background-color: $main-blue;
  box-shadow: inset 5px 6px 8px -2px rgba(0, 0, 0, 0.6),
              inset -4px -5px 5px 0 rgba(255, 255, 255, 0.2);
  border-radius: 20px;

  &::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
}


</style>
