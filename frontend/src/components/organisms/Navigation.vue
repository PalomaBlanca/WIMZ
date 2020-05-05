<template>
    <div class="container">
        <div class="row button-group">
            <button 
                type="button" 
                class="col-12 btn btn-danger"
                @click="handleClick('give-info')"
            >
                <svg class="bi bi-geo" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path d="M7.5 4h1v9a.5.5 0 01-1 0V4z"/>
                    <path fill-rule="evenodd" d="M6.489 12.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z" clip-rule="evenodd"/>
                </svg>
                Meldung abgeben
            </button>
            <button 
                type="button" 
                class="col-12 btn btn-success"
                @click="handleClick('get-info')"
            >
                <svg class="bi bi-lightning-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd"/>
                </svg>
                Infos holen
            </button>
            <button 
                type="button" 
                class="col-12 btn btn-info"
                @click="handleClick('about-us')"
            >
                <svg class="bi bi-egg-fried" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.665 6.113a1 1 0 01-.667-.977L13 5a4 4 0 00-6.483-3.136 1 1 0 01-.8.2 4 4 0 00-3.693 6.61 1 1 0 01.2 1 4 4 0 006.67 4.087 1 1 0 011.262-.152 2.5 2.5 0 003.715-2.905 1 1 0 01.341-1.113 2.001 2.001 0 00-.547-3.478zM14 5c0 .057 0 .113-.003.17a3.001 3.001 0 01.822 5.216 3.5 3.5 0 01-5.201 4.065 5 5 0 01-8.336-5.109A5 5 0 015.896 1.08 5 5 0 0114 5z" clip-rule="evenodd"/>
                    <circle cx="8" cy="8" r="3"/>
                </svg>
                Über uns
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',

    methods: {
        handleClick(way) {
            this.$router.push({name: way});
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';

.btn {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
}

.button-group {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}
</style>