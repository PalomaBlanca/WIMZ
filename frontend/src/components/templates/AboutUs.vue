<template>
    <div>
        <Header/>
        <Navigation
            @wantsToGiveInfo="handleClick('give-info')"
            @wantsToGetInfo="handleClick('get-info')"
            @wantsToKnowAboutUs="handleClick('about-us')"
        />
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Navigation from '@/components/organisms/Navigation';

export default {
    name: 'about-us',
    
    components: {
        Header, 
        Footer,
        Navigation
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
.cotent-wrapper {
    background-color: $background-color;
}

</style>