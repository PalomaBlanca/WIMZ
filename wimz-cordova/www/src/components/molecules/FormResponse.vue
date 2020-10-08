<template>
    <div>
        <div v-if="success-or-fail === 1">
            <p> Vielen Dank für deine Hilfe! </p>
        </div>
        <div v-else>
            <p> Das tut uns sehr leid. Da ist etwas in der Kommunikation schief gelaufen. Bitte versuche es einfach nochmal. </p>
        </div>
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name: "FormResponse",
    props: {
        successOrFail: VueTypes.number.def(1),
    }
}
</script>

<style lang="scss" scoped>
</style>
