<template>
    <div class="container">
        <Form />
        <OpenStreetMap/>
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
@import '../css/grid/index.scss';
</style>