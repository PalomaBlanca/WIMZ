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
              :title="$store.getters.markerOfTrain.label"
              @click="clickedMarker()"
      />

      <gmap-info-window
              :options="infoOptions"
              :position="getMapData"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>

    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps"
import { store } from "../store/store";
import InfoWindow from "./molecules/InfoWindow";

export default {
  name: 'GMap',
  store,
  components: {
    InfoWindow,
  },
  data(){
    return {
      currentPosition: {
        lat: 0,
        lng: 0
      },
      infoContent: '',
      infoWinOpen: false,
      infoWindowPos: this.getMapData,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
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
    },
    getLabelForMarker() {
      return (
              `<div style='background-color: blue;'>${this.$store.getters.markerOfTrain.label} | ${this.$store.getters.markerOfTrain.lastUpdate}min </div>`
      )
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

    clickedMarker () {
      //this.infoWindowPos = event.target.position;
      this.infoContent = this.getLabelForMarker;


      //check if its the same marker that was selected if yes toggle

      this.infoWinOpen = !this.infoWinOpen;
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
