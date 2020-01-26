<template>
    <div class="container">
        <Form />
        <GMap class="row"/>
    </div>
</template>
<script>
import GMap from '../components/GMap'
import Form from '../components/organisms/Form'
export default {
    name: 'Basic',
    components: {
        GMap,
        Form
    }
}
</script>
<style lang="scss" scoped>
@import '../css/grid/index.scss';
</style>