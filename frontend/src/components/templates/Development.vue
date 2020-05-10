<template>
    <div>
        <Header/>
        <Navigation/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Navigation from '@/components/organisms/Navigation';

export default {
    name: 'Development',
    
    components: {
        Header, 
        Footer,
        Navigation
    },    
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';
.cotent-wrapper {
    background-color: $background-color;
}

</style>
