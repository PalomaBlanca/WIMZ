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
.vdatetime {
  width: 100%;
}

.vdatetime-input {
  @include typo-body;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  color: $main-white;
  height: 40px;
  width: 100%;
  border: none;
  background-color: $main-blue;
  box-shadow: inset 5px 6px 8px -2px rgba(0, 0, 0, 0.6),
              inset -4px -5px 10px 0 rgba(255, 255, 255, 0.2);
  border-radius: 100px;
}

</style>
