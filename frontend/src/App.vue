<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Basic from '@/components/templates/StartPage.vue'

export default {
  name: 'app',
  components: {
    Basic
  }
}
</script>

<style lang="scss">
@import '@/css/utils.scss';
html {
  background-color: $background-color;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
}
body {
  margin: 0;
  background-color: $background-color;
}
</style>
