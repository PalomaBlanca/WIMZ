<template>
    <div>
        <Form/>
        <GMap :listOfMarker=listOfMarker class="row"/>
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