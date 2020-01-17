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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
