<template>
    <div class="container">
        <div class="content">
        <Form class="row"/>
        <OpenStreetMap class="row"/>
        </div>
    </div>
</template>
<script>
import OpenStreetMap from '../components/organisms/OpenStreetMap'
import Form from '../components/organisms/Form'
export default {
    name: 'Basic',
    components: {
        OpenStreetMap,
        Form
    }
}
</script>
<style lang="scss" scoped>
@import '../css/utils.scss';
.container {
    background-color: $main-base-color;
}
.content {
    padding-top: 50px; 
}
</style>