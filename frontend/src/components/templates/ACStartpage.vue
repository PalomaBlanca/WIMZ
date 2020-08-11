<template>
  <div>
    <ACHeader/>
  <div class="startText container">
    <div class="row">
      <div class="col-12 startText__col">
        <p>Hi! Willkommen bei wimz?</p>
        <p>Möchtest du eine Meldung abgeben oder lieber eine Information erhalten?</p>
        <i class="fas fa-arrows-alt-h startText__choice-icon"></i>
      </div>
    </div>
  </div>
  <div class="navigation-choice container">
    <div class="row">
      <div class="col-12 navigation-choice__col">
        <ACButton
            type="button"
            :left=true
            class="giveInfoButton"
            @click="handleClick('give-info')"
        >
          <i class="fas fa-bullhorn"></i>
        </ACButton>

        <ACButton
            type="button"
            :left=false
            class="getInfoButton"
            @click="handleClick('get-info')"
        >
          <i class="fas fa-search-location"></i>
        </ACButton>
      </div>
    </div>
  </div>
  <div class="introText container">
    <div class="row">
      <div class="col-12">
        <i class="fas fa-route introText__route-icon"></i>
        <p>Dadurch, dass du wimz? nutzt können wir den öffentlichen Personennahverkehr planbar machen. Durch die Community von wimz? und der Regel jeder hilft jedem, können wir wertvolle Informationen teilen und uns unnötiges "Gewarte" oder "Gerenne" sparen.
        </p>
      </div>
    </div>
  </div>

  <div class="textWhite container">
    <div class="row">
      <div class="col-12">
        <i class="fas fa-heart textWhite__broken-heart-icon"></i>
        <p> Damit wir alle unsere Ziele erreichen, müssen wir ankommen. Dabei möchte man nicht auf jedemanden warten müssen und sich verspäten. Denn durch verpasste Züge zerbrechen Herzen und Freundschaften, zerplatzen Vorstellungsgespräche und wichtige Termine und steigern insgesamt die Negativität. Dafür benötigt man eine verlässliche Informationsquelle, damit der Zug ein zuverlässiges Fortbewegungsmittel ist.
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
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

.startText {
  @include typo-body-filled;
  color: $main-blue;
  background-color: $main-white;

  &__choice-icon {
    font-size: 100px;
    color: $superlight-blue;
    width: 100%;
    text-align: center;
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

  &__col {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-white;
    padding-bottom: 50px;
  }
}

.giveInfoButton {
  margin-left: -15px;
  margin-right: 25px;
  color: $main-white;
  background-color: $main-blue;
  font-size: 40px;
}
.getInfoButton {
  margin-right: -15px;
  margin-left: 25px;
  color: $main-white;
  background-color: $main-blue;
  font-size: 40px;
}

body {
  background-color: $main-blue;
}
</style>
