<template>
  <div class="col-12">
    <div id="mapid" class="map"></div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'ACMap',

    data() {
      return {
        map: null,
      }
    },

    props: {
      lat: VueTypes.number.def(null),
      lng: VueTypes.number.def(null),
    },

    mounted() {
      this.initMap();
    },

    methods: {
      initMap() {
        this.map = L.map('mapid');
        if(this.lat && this.lng) {
          this.map.setView([this.lat, this.lng], 13);
          L.marker([this.lat, this.lng]).addTo(this.map);
        } else {
          this.map.setView([0, 0], 13);
          L.marker([0, 0]).addTo(this.map);
        }


        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      		maxZoom: 18,
      		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      		id: 'mapbox/streets-v11',
      		tileSize: 512,
      		zoomOffset: -1
      	}).addTo(this.map);
      }
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';
.map {
  height: 400px;
  width: 100%;
}
</style>
