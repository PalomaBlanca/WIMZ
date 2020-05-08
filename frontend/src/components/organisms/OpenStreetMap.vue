<template>
  <div>
    <div class="map" v-if="currentPosition.lat !== 0">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="currentPosition"/>
        <l-marker v-show="marker.lat" :lat-lng="marker">
          <InfoWindow :isTrain="true"/>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { store } from "../../store/store";
import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
//import {LPopup} from 'vue2-leaflet';
import InfoWindow from '../molecules/InfoWindow'

export default {
  name: 'OpenStreetMap',
  store,
  components: {
    LMap, 
    LTileLayer, 
    LMarker,
    //LPopup,
    InfoWindow
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

/*   computed: {
    getMapData() {
      this.center =  {
        lat: this.currentPosition.lat,
        lng: this.currentPosition.lng,
      };
    },
  }, */

  created() {
    this.$store.watch(
      (state, getters) => getters.markersOfTrain,
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
    getMapData() {
      this.center =  {
        lat: this.currentPosition.lat,
        lng: this.currentPosition.lng,
      };
    },

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
      this.$store.commit('setCurrentLocation', this.currentPosition)
    },

    clickedMarker () {
      /*
      //this.infoWindowPos = event.target.position;
      this.infoContent = this.getLabelForMarker;


      //check if its the same marker that was selected if yes toggle

      this.infoWinOpen = !this.infoWinOpen;*/
    },
    onMarkerClick(e){
      this.$nextTick( () => e.target.openPopup() )
      /*
      L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
      */
    }
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
</style>
