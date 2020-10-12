<template>
  <datetime
    type="datetime"
    v-model="date"
  >
  </datetime>
</template>
<script>
import VueTypes from 'vue-types';
import { Datetime } from 'vue-datetime';
// You need a specific loader for CSS files

import 'vue-datetime/dist/vue-datetime.css'
//import '@/css/vendor/vue-datetime.module.css';
export default {
    name: 'ACDateTimePicker',
    components: {
      Datetime,
    },
    data() {
      return {
        date: "",
      }
    }
}
</script>
<style lang="scss">
@import '@/sass/utils.scss';

.vdatetime-input {
  width: 100%;
}

</style>
