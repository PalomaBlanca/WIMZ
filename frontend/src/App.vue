<template>
  <div id="app">
    <Basic/>
  </div>
</template>

<script>
import Basic from './templates/Basic.vue'

export default {
  name: 'app',
  components: {
    Basic
  }
}
</script>

<style lang="scss">
@import 'css/utils.scss';
html {
  background-color: $main-base-color;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
}
body {
  margin: 0;
}
</style>
