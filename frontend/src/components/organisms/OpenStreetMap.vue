<template>
  <div>
    <div class="map" v-if="currentPosition.lat !== 0">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="currentPosition"></l-marker>
        <l-marker v-show="marker.lat" :lat-lng="marker"></l-marker>
        <div class="fake-map-border"></div>
      </l-map>
    </div>
  </div>
</template>

<script>
import { store } from "../../store/store";
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  name: 'OpenStreetMap',
  store,
  components: {
    LMap, 
    LTileLayer, 
    LMarker
  },
  data(){
    return {
      zoom: 13,
      center: {
        lat: null,
        lng: null,
      },
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: {
        lat: null,
        lng: null,
      },
      currentPosition: {
        lat: 51.1,
        lng: 6.1
      },
    }
  },
  computed: {
    getMapData() {
      this.center =  {
        lat: this.currentPosition.lat,
        lng: this.currentPosition.lng,
      };
    },
    getLabelForMarker() {
      return (
        `${this.$store.getters.markerOfTrain.label} | ${this.$store.getters.markerOfTrain.lastUpdate}min`
      )
    },
  },
  created() {
    this.$store.watch(
      (state, getters) => getters.markerOfTrain,
      (newValue) => {
        if (newValue.lat !== null) {
          this.marker = {
            lat: newValue.lat,
            lng: newValue.lng
          };
          this.center = {
            lat: newValue.lat,
            lng: newValue.lng
          };
        }
      },
    );
  },
  mounted() {
    this.getLocation();
  },
  updated() {
    this.getMapData;
  },
  methods: {
     async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          this.showPosition(pos);
        }, err => {
          reject(err);
        });

      });
    },
    showPosition(position) {
      this.currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(this.currentPosition)
      this.$store.commit('setCurrentLocation', this.currentPosition)
    },

    clickedMarker () {
      /*
      //this.infoWindowPos = event.target.position;
      this.infoContent = this.getLabelForMarker;


      //check if its the same marker that was selected if yes toggle

      this.infoWinOpen = !this.infoWinOpen;*/
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/utils.scss';

.map {
  height: 500px;
  min-width: 320px;
  width: 100%;
}
.fake-map-border {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: transparent;
  box-shadow: inset 0px 0px 40px 40px $main-base-color;
}
</style>
