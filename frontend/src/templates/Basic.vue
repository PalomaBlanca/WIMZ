<template>
    <div>
        <Form/>
        <GMap/>
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
<style scoped>

</style>