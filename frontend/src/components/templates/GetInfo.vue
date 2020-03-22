<template>
    <div>
        <Header/>
        <Navigation
            @wantsToGiveInfo="handleClick('give-info')"
            @wantsToGetInfo="handleClick('get-info')"
            @wantsToKnowAboutUs="handleClick('about-us')"
        />
        <div class="text-wrapper">
            <p>
               In diesem Formular kannst du deinen Zug und die Richtung angeben. Daraufhin wertet unser System die Daten aus und zeigt dir dies auf der Karte an. 
            </p>
        </div>    
        <form-get-info/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import FormGetInfo from '@/components/organisms/FormGetInfo'

export default {
    name: 'GetInfo',

    components:  {
        Navigation,
        Header,
        Footer,
        FormGetInfo,
    },

    methods: {
        handleClick(way) {
            this.$router.push({name: way});
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';
</style>