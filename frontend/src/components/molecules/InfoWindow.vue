<template>
    <l-popup :content="getLabelForMarker">
    </l-popup>
</template>
<script>
import {LPopup} from 'vue2-leaflet';
    export default {
        name: 'InfoWindow',
        components: {
            LPopup
        },
        computed: {
            getLabelForMarker() {
                return (
                    `<div class="popUp"><b>${this.$store.getters.markerOfTrain.label} </b> | 
                    ${this.$store.getters.markerOfTrain.lastUpdate}min <br/> 
                    von: <br/>
                    ${this.$store.getters.markerOfTrain.from} <br/>
                    nach: <br/>
                    ${this.$store.getters.markerOfTrain.to}</div>`
                )
            },
        }
    }
</script>
<style lang="scss" scoped>
    div{
        background-color: blue;
    }
</style>