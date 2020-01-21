<template>
  <div>
    <GmapMap
      :center="currentPosition"
      :zoom="10"
      map-type-id="terrain"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
      class="googleMap"
    >
  <GmapMarker
    :position="google && new google.maps.LatLng(currentPosition)"
  />
  <GmapMarker
    v-for="marker in listOfMarker"
    :key="marker.lat"
    :position="google && new google.maps.LatLng(marker.lat, marker.lng)"
  />
</GmapMap>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import VueTypes from 'vue-types'

export default {
  name: 'GMap',
  data(){
    return{
      currentPosition: {
        lat: 0,
        lng: 0,
      }
    }
  },
  computed: {
    google: gmapApi,
  }, 
  props: {
    listOfMarker: VueTypes.arrayOf([
      VueTypes.shape({
        lat: VueTypes.number.isRequired,
        lng: VueTypes.number.isRequired,
        label: VueTypes.string.isRequired,
        url: VueTypes.string.def(''),
      })
    ]).def([])
  }, 
  mounted(){
    this.getLocation();
  },
  methods: {
  getLocation() {
      if (navigator.geolocation) {
        try{
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } catch(e) {
          //console.log(e)
        }
      } else { 
          //console.log('Ihr Browser unterstützt keine Geolocation.');
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
<style lang="scss" scoped>
.googleMap {
  width: 100%;
  height: 500px;
}
</style>
