<template>
    <div>
        <form action="/"><input type="text" placeholder="In welchen Zug steigst du ein?" required/><Button type="submit">EINSTEIGEN</Button></form><br/>
        <form action="/"><input type="text" placeholder="Welchen Zug suchst du?" required/><Button type="submit">FINDEN</Button></form>
    </div>
</template>

<script>
import Button from '../molecules/Button'
export default {
    name: 'Form',
    components: {
        Button,
    }
}
</script>

<style lang="scss" scoped>

</style>