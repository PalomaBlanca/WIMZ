<template>
  <div class="navigation-choice">
    <ACButton
        type="button"
        class="giveInfoButton"
        @click="handleClick('give-info')"
    >

    </ACButton>

    <ACButton
        type="button"
        class="getInfoButton"
        @click="handleClick('get-info')"
    >

    </ACButton>
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
.navigation-choice {
  display: flex;
  align-items: center;
  justify-content: center;
}

.giveInfoButton,
.getInfoButton {
  margin-left: 25px;
  margin-right: 25px;
}
body {
  background-color: $main-blue;
}
</style>
