<template>
  <div>
    <GmapMap
      :center="currentPosition"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
    >
  <GmapMarker
    :position="google && new google.maps.LatLng(51.331699,6.559350)"
  />
</GmapMap>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
//import {getLocation} from '@/js/helper/geoLocationOfUser.js'

export default {
  name: 'GMap',
  data(){
    return{
      currentPosition: {
        lat: 10,
        lng: 10,
      }
    }
  },
  computed: {
    google: gmapApi,
  }, 
  mounted(){
    this.getLocation();
  },
  methods: {
  getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else { 
          console.log('Ihr Browser unterstützt keine Geolocation.');
      }
  },
  showPosition(position) {
    this.currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
