<template>
  <div>
    <ACHeader/>
</div>
</template>

<script>
import ACButton from '@/components/molecules/ACButton';
import ACHeader from '@/components/organisms/ACHeader';

export default {
    name: 'ACGetInfo',
    components:  {
        ACButton,
        ACHeader,
    },
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

</style>
