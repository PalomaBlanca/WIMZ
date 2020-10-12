<template>
  <div class="card-box">
    <span>{{startStation}}</span>
    <span>{{targetStation}}</span>
    <span>{{startTime}}</span>
    <span>{{departure}}</span>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'ACJourneyCard',
    props: {
      startStation: VueTypes.string.required,
      targetStation: VueTypes.string.required,
      startTime: VueTypes.string.required,
      departure: VueTypes.string.required,
      journeyId: VueTypes.number.required
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.card-box {
  border-radius: 15px;
  background-color: $main-orange;
  color: $main-white;
  min-height: 150px;
  padding: 10px;
}

</style>
