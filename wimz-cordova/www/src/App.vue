<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import '@/sass/utils.scss';
html {
  //background-color: $background-color;
  padding: 0;
}
body {
  margin: 0;
  background-color: $main-blue;
}
</style>
