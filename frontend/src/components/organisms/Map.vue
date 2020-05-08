<template>
    <div class="map rounded">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                v-for="(info, index) in infoList" 
                :lat-lng="{lat: info.lat, lng: info.lng}"
                :key="index"
            >
                <InfoWindow 
                    :headline="info.label" 
                    :time="info.lastUpdate"
                    :comment="info.comment"
                    :userIsInTrain="info.userIsInTrain"
                    :target="info.to"
                    :isTrain="true"
                />
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import InfoWindow from '@/components/molecules/InfoWindow';
import store from '@/store/store.js';

export default {
    store,
    components: {
        LMap, 
        LTileLayer, 
        LMarker,
        InfoWindow
    },
    name: 'Map',

    computed: {
        infoList() {
            if(this.$store.getters.markersOfTrain.length > 0){
                this.centerMap(this.$store.getters.markersOfTrain[0].lat, this.$store.getters.markersOfTrain[0].lng)
                return this.$store.getters.markersOfTrain;
            }
            return [];
        }
    },

    data(){
        return {
            zoom: 12,
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
        }
    },

    methods: {
        centerMap(lat, lng) {
            this.center =  {
                lat,
                lng
            };
        },
        onMarkerClick(e){
            this.$nextTick( () => e.target.openPopup() )
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';
.map {
  height: 300px;
  min-width: 320px;
  width: 100%;
}
</style>