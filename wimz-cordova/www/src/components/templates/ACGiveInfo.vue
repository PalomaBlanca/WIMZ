<template>
  <div>
    <ACHeader/>
    <div class="container give-info">
      <div class="row">
        <div class="give-info__content">
          <ACGiveInfoForm/>
          <ACLoadingLayer v-if="loading"/>
          <ACMap :lng="lng" :lat="lat" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ACButton from '@/components/molecules/ACButton';
import ACHeader from '@/components/organisms/ACHeader';
import ACLoadingLayer from '@/components/organisms/ACLoadingLayer';
import ACMap from '@/components/organisms/ACMap';
import ACGiveInfoForm from '@/components/organisms/ACGiveInfoForm';

export default {
    name: 'ACGiveInfo',

    components:  {
        ACButton,
        ACHeader,
        ACLoadingLayer,
        ACMap,
        ACGiveInfoForm,
    },

    data() {
      return {
        lat: null,
        lng: null,
        loading: true,
      }
    },

    mounted() {
      this.getLocation();
    },

    methods: {
      getPosition() {
          return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject, null);
          });
      },

      getLocation() {
        var placeHolder = 'Wir holen alles aus der Datenbank...'
        this.loading = true;
        if (navigator.geolocation) {
            this.getPosition()
                .then((position) => {
                        var payLoad = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        this.lat = payLoad.lat;
                        this.lng = payLoad.lng;
                        this.loading = false;
                    }
                )
                .catch((err) => {
                    alert('Geolokalisierung wird von diesem Browser nicht unterstützt oder ist nicht aktiviert. Bitte überprüfen Sie Ihre Einstellungen.')
                });

        } else {
            alert('Geolokalisierung wird von diesem Browser nicht unterstützt oder ist nicht aktiviert. Bitte überprüfen Sie Ihre Einstellungen.')
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

.give-info {
  &__content {
    @include typo-body-filled;
    color: $main-white;
    margin-top: $header-height-mobile + 50px;
    width: 100%;
  }
}

</style>
