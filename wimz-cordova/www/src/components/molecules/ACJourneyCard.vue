<template>
  <ACButton class="card-box">
    <span>{{startStation}}</span>
    <span>{{targetStation}}</span>
    <span>{{startTime}}</span>
    <span>{{departure}}</span>
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
      journeyId: VueTypes.number.required
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.card-box {
  border-radius: 15px;
  color: $main-white;
  padding: 10px;
  height: 150px;
  margin: 15px;
  margin-bottom: 20px;
}

</style>
