<template>
  <ACButton class="card-box">

    <div class="line">
      #{{line.fahrtNr}}
    </div>

    <div class="train box-wrapper">
      <i class="fa fa-train icon" aria-hidden="true"></i>
      <div>
        <span>{{line.additionalName}}</span>
      </div>
    </div>


    <div class="stations box-wrapper">
      <i class="fa fa-road icon" aria-hidden="true"></i>
      <div>
        <span>{{startStation}}</span>
        <i class="fa fa-long-arrow-right icon-arrow" aria-hidden="true"></i>
        <span>{{targetStation}}</span>
      </div>
    </div>

    <div class="time box-wrapper">
      <i class="fa fa-clock icon" aria-hidden="true"></i>
      <div>
        <span>{{departureTime}}</span>
        <i class="fa fa-long-arrow-right icon-arrow" aria-hidden="true"></i>
        <span>{{arrivalTime}}</span>
      </div>
    </div>

  </ACButton>
</template>
<script>
import VueTypes from 'vue-types'
import ACButton from '@/components/molecules/ACButton';
export default {
    name: 'ACJourneyCard',
    components: {
      ACButton,
    },

    props: {
      startStation: VueTypes.string.required,
      targetStation: VueTypes.string.required,
      departure: VueTypes.string.required,
      arrival: VueTypes.string.required,
      journeyId: VueTypes.number.required,
      line: VueTypes.object.default({})
    },

    computed: {
      arrivalTime() {
        const dateTime = new Date(this.arrival);
        return `${dateTime.getHours()}:${dateTime.getMinutes()}`;
      },

      departureTime() {
        const dateTime = new Date(this.departure);
        return `${dateTime.getHours()}:${dateTime.getMinutes()}`;
      }
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.card-box {
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  border-radius: 15px;
  color: $main-white;
  padding: 10px;
  height: 150px;
  margin: 15px;
  margin-bottom: 20px;
}

.line {
  position: absolute;
  color: $main-white;
  opacity: 0.5;
  top: 15px;
  right: 15px;
}

.icon-arrow {
  margin-left: 5px;
  margin-right: 5px;
}

.icon {
  color: $main-orange;
  margin-right: 15px;
}

.box-wrapper {
  width: 100%;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 15px;
  }
}

</style>
