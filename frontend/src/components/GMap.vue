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
              v-show="getMapData"
              :position="google && new google.maps.LatLng(getMapData)"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import { store } from '../store/store';

export default {
  name: 'GMap',
  store,
  data(){
    return {
      currentPosition: {
        lat: 0,
        lng: 0
      }
    }
  },
  computed: {
    google: gmapApi,
    getMapData() {
      return {
        lat: this.$store.getters.markerOfTrain.lat,
        lng: this.$store.getters.markerOfTrain.lng,
      };
    }
  },
  mounted() {
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
      };
      this.$store.commit('setCurrentLocation', this.currentPosition)
    },
  }
}
</script>

<style lang="scss" scoped>
.googleMap {
  width: 100%;
  height: 500px;
}
</style>
