<template>
    <div class="row justify-content-md-center">
        <Form class="col-auto "/>
        <GMap :listOfMarker=listOfMarker class="col-12"/>
    </div>
</template>
<script>
import GMap from '../components/GMap'
import Form from '../components/organisms/Form'
import listOfMarker from '../mockData/marker'
export default {
    name: 'Basic',
    components: {
        GMap,
        Form
    },
    data(){
        return{
            listOfMarker
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../css/grid/index.scss';
</style>