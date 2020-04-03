<template>
    <l-popup :content="getLabelForMarker">
    </l-popup>
</template>
<script>
import {LPopup} from 'vue2-leaflet';
import VueTypes from 'vue-types';
    export default {
        name: 'InfoWindow',
        components: {
            LPopup
        },

        props: {
            headline: VueTypes.string.isRequired,
            time: VueTypes.number,
            comment: VueTypes.string.def(''),
            target: VueTypes.string.isRequired,
        },

        computed: {
            getLabelForMarker() {
                return (
                    `<div class="popUp"><b>${this.headline} </b> | 
                    ${this.time}min <br/>
                    nach: 
                    ${this.target}</div><br/><br/>Nachricht:<br/><div>${this.comment}</div>`
                )
            },
        }
    }
</script>
<style lang="scss" scoped>
</style>