<template>
  <div>
    <form
          @submit.prevent="sendLocationAndTrain"
    >
        <label for="setTrainInput">Zug:</label>
        <input
            id="setTrainInput"
            type="text"
            aria-describedby="whichTrain"
            placeholder="Welcher Zug? (z.B. RE8)"
            v-model="setTrainInputValue"
        />
        <label for="setTargetOfTrainInput">Ziel:</label>
        <input
            id="setTargetOfTrainInput"
            type="text"
            aria-describedby="targetOfrain"
            placeholder="Wohin fährt der Zug?"
            v-model="setTargetOfTrain"
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
import trainAndLocation from '@/js/api/trainAndLocationApi';

export default {
    name: 'ACGiveInfoForm',

    data() {
      return {
        setTrainComment: "",
        setTrainInputValue: "",
        setTargetOfTrain: "",
        trainAndLocationResponse: ""
      }
    },

    methods: {
      async sendLocationAndTrain() {
          this.trainAndLocationResponse =
          await trainAndLocation({
              name: this.setTrainInputValue,
              targetStation: this.setTargetOfTrain,
              comment: this.setTrainComment,
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


</style>
