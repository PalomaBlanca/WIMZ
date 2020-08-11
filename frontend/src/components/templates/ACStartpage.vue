<template>
  <div>


  <div class="navigation-choice container">
    <div class="row">
      <div class="col-12 navigation-choice__col">
        <ACButton
            type="button"
            :left=true
            class="giveInfoButton"
            @click="handleClick('give-info')"
        >
          <svg width="50%" height="50%" viewBox="0 0 16 16" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
          </svg>
        </ACButton>

        <ACButton
            type="button"
            :left=false
            class="getInfoButton"
            @click="handleClick('get-info')"
        >
          <svg width="50%" height="50%" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
          </svg>
        </ACButton>
      </div>
    </div>
  </div>
  <div class="introText container">
    <div class="row">
      <div class="col-12">
        Hi! Willkommen bei wimz?
        Dadurch, dass du wimz? nutzt können wir den öffentlichen Personennahverkehr planbar machen. Durch die Community von wimz? und der Regel jeder hilft jedem, können wir wertvolle Informationen teilen und uns unnötiges "Gewarte" oder "Gerenne" sparen.
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import ACButton from '@/components/molecules/ACButton';

export default {
    name: 'ACStartPage',

    components:  {
        Navigation,
        Header,
        Footer,
        ACButton,
    },
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

.introText {
  @include typo-body;
  color: $main-white;
}

.navigation-choice {
  &__col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.giveInfoButton {
    margin-left: -15px;
    margin-right: 25px;
    svg {
      color: $main-blue;
    }
}
.getInfoButton {
  margin-right: -15px;
  margin-left: 25px;
  svg {
    color: $main-blue;
  }
}
body {
  background-color: $main-blue;
}
</style>
