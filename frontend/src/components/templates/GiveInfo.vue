<template>
    <div class="start-page-wrapper">
        <Header/>
        <Navigation/>
        <div class="p-3 mt-5">
            <p>
                
            </p>
        </div>
        <form-give-info/>
        <Footer/>
    </div>
</template>

<script>
//import router from '@/js/router/index.js';
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import FormGiveInfo from '@/components/organisms/FormGiveInfo'

export default {
    name: 'StartPage',

    components:  {
        Navigation,
        Header,
        Footer,
        FormGiveInfo,
    }
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';

.start-page-wrapper {
    background-color: $background-color;
}


</style>