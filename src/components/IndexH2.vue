<template>
    <div class="h2-container">
<img class="h2-back" src="~@/assets/image/index/h2_background.svg" alt="">
        <span class="location">LOCATION</span>
        <hr class="h2-hr">
        <h2 class="h2-group">
            <span class="h2-ch">{{ h2ch }}</span>
            <br>
            <span class="h2-en">{{ h2en }}</span>
        </h2>
    </div>
</template>
<script>
export default {
    props: ['h2ch', 'h2en']
}

</script>
<style scoped lang="scss">
.h2-container{
    color: $white;
    letter-spacing:0.3rem;
    position: relative;
}
.h2-back{
    width: 200%;
    position: absolute;
    top: -50%;
    left:-50%;
    z-index: -2;
}
.location {
    $p2-s: 14px;
    line-height: 1.5;
    padding-left: 5%;

}
.h2-hr
{
    border-bottom: 1px solid $white;
}
.h2-group {
    font-size: $h2-s;
    text-align: center;
    line-height: 2.3rem;
}

.h2-en {
    color: transparent;
    -webkit-text-stroke: .3px $white;
    font-weight: 700;
}

@media screen and (min-width: 700px) {
    h2 {
        font-size: $h2-m;
    }
    .location {
        $p2-m: 16px;
    }
}

@media screen and (min-width: 1024px) {
    h2 {
        font-size: $h2-l;
    }

}

@media screen and (min-width: 1800px) {}</style>