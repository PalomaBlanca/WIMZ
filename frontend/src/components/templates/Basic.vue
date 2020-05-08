<template>
    <Scrollbar>
        <div>
            <Header />
            <div class="container">
                <div class="content">
                <Form class="row"/>
                <OpenStreetMap class="row"/>
                </div>
            </div>
        </div>
    </Scrollbar>
</template>
<script>
import OpenStreetMap from '@/components/organisms/OpenStreetMap'
import Form from '@/components/organisms/Form'
import Header from '@/components/organisms/Header'
import Scrollbar from '@/components/molecules/Scrollbar'

export default {
    name: 'Basic',
    components: {
        OpenStreetMap,
        Form,
        Header,
        Scrollbar,
    },
}
</script>
<style lang="scss" scoped>
@import '@/css/utils.scss';
.container {
    background-color: $main-base-color;
    max-width: 100%;
}
.content {
    padding-top: 50px; 
    width: 85%;
    margin-left: auto;
    margin-right: auto;
}
</style>