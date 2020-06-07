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
            comment: VueTypes.string.def('Kein Kommentar vorhanden :('),
            target: VueTypes.string.isRequired,
            userIsInTrain: VueTypes.bool.def(false),
        },

        computed: {
            getLabelForMarker() {
                if(this.userIsInTrain){
                    return (
                        `<div class="popUp bg-success"><b>${this.headline} </b> | 
                        ${this.time}min <br/>
                        nach: 
                        ${this.target}<br/><br/>Nachricht:<br/><div>${this.comment}</div></div>`
                    )
                } else {
                    return (
                        `<div class="popUp bg-warning"><b>${this.headline} </b> | 
                        ${this.time}min <br/>
                        nach: 
                        ${this.target}<br/><br/>Nachricht:<br/><div>${this.comment}</div></div>`
                    )
                }
            },
        }
    }
</script>
