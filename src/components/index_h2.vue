<template>
    <div class="h2-group">
        <span class="location">LOCATION</span>
        <h2>
            <span class="h2-ch">{{h2-ch}}</span>
            <span class="h2-en">{{h2-en}}</span>
        </h2>
    </div>
</template>
<script>
export default {

    props: ['h2-ch', 'h2-en']
}
</script>
<style scoped lang="scss">
.h2-group{
background-image: url(/src/assets/image/index/h2-background.svg);;
}

</style>