<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'LocationHandler',
    data() {
        return {
            currentLocation: {
                lat: 51.2,
                lng: 4.1,
            },
            geoSettings: {
                enableHighAccuracy: false,
                maximumAge        : 30000,
                timeout           : 20000
            }
        }
    },

    mounted() {
        this.handlePermission();
    },

    methods: {
        handlePermission() {
            let data = this;
            navigator.permissions.query({name:'geolocation'}).then(function(result) {
                if (result.state == 'granted') {
                    data.report(result.state);
                } else if (result.state == 'prompt') {
                    data.report(result.state);
                    navigator.geolocation.getCurrentPosition(pos => {
                        data.revealPosition(pos);
                    });
                   // navigator.geolocation.getCurrentPosition(data.revealPosition(), data.positionDenied(), data.geoSettings);
                } else if (result.state == 'denied') {
                    data.report(result.state);
                }
                result.onchange = function() {
                    data.report(result.state);
                }
            });
        },

        report(state) {
            let data = this;
            navigator.geolocation.getCurrentPosition(pos => {
                data.revealPosition(pos);
            });
            console.log('Permission', state);
        },

        revealPosition(position) {
            console.log('Position', position)
        },

        positionDenied() {

        }
    }
}
</script>