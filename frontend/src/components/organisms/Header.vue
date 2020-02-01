<template>
    <header>
        <div class="header-text">
            WIMZ
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../../css/utils.scss';
    header {
        background-color: $focus-color;
        min-height: 30px;
        height: 10vh;
        text-align: center;
    }

    .header-text {
        height: 100%;
        font-weight: bold;
        font-size: 50px;
        color: $main-base-color;
    }
</style>