<template>
  <div>
    <ACHeader/>
      <div class="startText container">
        <div class="row">
          <div class="col-12 startText__col">
            <div class="startText__content">
              <p> Hi! Willkommen bei wimz? </p>
              <p> Möchtest du eine Meldung abgeben oder lieber eine Information erhalten? </p>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation-choice container">
        <div class="row">
          <div class="col-12 navigation-choice__col">
            <ACButton
                type="button"
                class="giveInfoButton"
                @click.native="handleClick('share-love')"
            >
              <i class="fas fa-bullhorn"></i>
            </ACButton>

            <ACButton
                type="button"
                class="getInfoButton"
                @click.native="handleClick('get-love')"
            >
              <i class="fas fa-search-location"></i>
            </ACButton>
          </div>
        </div>
      </div>
      <div class="spacer">
        <svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(1.28337,0,0,0.944918,-71.3991,15.391)">
                <path d="M1.508,398.513C5.516,355.418 19.937,337.27 46.921,303.43C94.737,243.462 250.451,154.558 299.899,90.625C318.278,66.862 291.467,21.688 313.782,1.575C335.063,-17.605 386.285,-24.65 399.725,0.651C475.157,142.662 452.549,170.909 264.551,226.819C211.886,242.481 160.517,279.608 146.156,321.53C136.619,349.371 128.469,383.191 106.87,395.922C76.606,413.762 35.937,405.504 1.508,398.513Z" style="fill:rgb(255,149,9);"/>
            </g>
            <path d="M-19.067,298.588C12.002,266.374 121.522,221.642 170.234,196.984C203.816,179.984 247.692,163.57 273.205,150.638C290.761,141.74 311.982,133.518 323.31,119.395C334.638,105.272 335.741,78.31 341.174,65.901C344.599,58.077 349.411,50.483 355.907,44.937C363.464,38.485 376.63,28.216 386.519,27.188C396.408,26.16 413.01,28.69 415.242,38.769C421.547,67.243 454.781,165.148 424.349,198.028C393.917,230.907 283.244,220.552 232.651,236.047C192.93,248.212 152.703,267.655 120.791,290.995C89.439,313.925 64.009,359.543 41.18,376.088C25.233,387.646 -6.138,403.181 -16.179,390.264C-26.221,377.348 -40.291,320.594 -19.067,298.588Z" style="fill:rgb(255,116,18);"/>
            <path d="M-9.937,312.423C19.527,284.802 102.704,243.059 153.875,217.194C200.063,193.847 265.279,171.457 297.088,157.23C313.514,149.883 333.395,140.956 344.724,131.834C353.991,124.371 357.232,108.575 365.059,102.497C372.317,96.862 384.747,96.265 391.686,95.366C396.681,94.719 404.687,92.482 406.697,97.101C412.046,109.392 420.045,151.62 423.781,169.116C426.105,179.999 428.226,192.012 429.114,202.074C429.919,211.176 438.163,230.759 429.114,229.486C359.738,219.724 215.644,230.33 175.446,250.25C147.772,263.965 114.13,281.651 86.208,301.077C58.287,320.504 26.105,353.166 7.918,366.806C-1.357,373.763 -19.933,391.982 -22.909,382.918C-25.885,373.854 -27.368,328.764 -9.937,312.423Z" style="fill:rgb(255,92,0);"/>
            <path d="M-71.351,239.278C55.105,238.147 181.56,237.015 308.016,235.883" style="fill:none;"/>
        </svg>
      </div>
  <div class="introText container">
    <div class="row">
      <div class="col-12">
        <i class="fas fa-route introText__route-icon"></i>
        <p>Dadurch, dass du wimz? nutzt, können wir den öffentlichen Personennahverkehr planbar machen. Durch die Community von wimz? und der Regel jeder hilft jedem, können wir wertvolle Informationen teilen und uns unnötiges "Gewarte" oder "Gerenne" sparen.
        </p>
      </div>
    </div>
  </div>

  <div class="textWhite container">
    <div class="row">
      <div class="col-12">
        <i class="fas fa-heart textWhite__broken-heart-icon"></i>
        <p> Damit wir alle unsere Ziele erreichen, müssen wir ankommen. Dabei möchte man nicht auf jedemanden warten müssen und sich verspäten. Denn durch verpasste Züge zerbrechen Herzen und Freundschaften, zerplatzen Vorstellungsgespräche und steigern insgesamt die Negativität. Dafür benötigt man eine verlässliche Informationsquelle, damit der Zug ein zuverlässiges Fortbewegungsmittel ist.
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ACButton from '@/components/molecules/ACButton';
import ACHeader from '@/components/organisms/ACHeader';

export default {
    name: 'ACStartPage',

    components:  {
        ACButton,
        ACHeader,
    },

    methods: {
      handleClick: function(route) {
        console.log(route);
        this.$router.push(route);
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

.startText {
  @include typo-body-filled;
  color: $main-white;
  background-color: $main-blue;

  &__content {
    margin-top: $header-height-mobile + 50px;
  }
}


.introText {
  @include typo-body-filled;
  @include module-bottom-space;

  color: $main-white;

  &__route-icon {
    font-size: 120px;
    color: $main-white;
    width: 100%;
    text-align: center;
  }
}

.textWhite {
  @include typo-body-filled;
  @include module-bottom-space;
  padding-top: 100px;
  color: $main-blue;
  background-color: $main-white;

  &__broken-heart-icon {
    font-size: 120px;
    color: $main-blue;
    width: 100%;
    text-align: center;
  }
}
.navigation-choice {
  @include module-bottom-space;
  background-color: transparent;
  z-index: 1;
  position: relative;

  &__col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.giveInfoButton,
.getInfoButton {
  position: relative;
  background-color: $main-blue;
  color: $button-color;
  font-size: 40px;
  padding: 20px;
  border: none;
  background: linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.1));
  box-shadow: 7px 10px 20px 4px rgba(0, 0, 0, 0.4), -8px -8px 20px 7px rgba(255, 255, 255, 0.15);
  height: 100px;
  width: 100px;


  & + & {
    margin-left: 50px;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
                inset -6px -6px 10px 0 rgba(255, 255, 255, 0.15);
    background: linear-gradient(-45deg, rgba(255,255,255,0.15), rgba(0,0,0,0.15));
  }

}

body {
  background-color: $main-blue;
}

.spacer {
  margin-top: -50px;
  margin-bottom: -150px;
  z-index: -1;
}
</style>
