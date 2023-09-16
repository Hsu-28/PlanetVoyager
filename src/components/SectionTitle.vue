<template>
    <div class="section-title">
        <img class="deco" src="~@/assets/image/technology/斜紋.png" alt="斜紋裝飾">
        <div class="padding">
            <h2>{{ cTitle }}</h2>
            <h2>{{ eTitle }}</h2>
        </div>
        <img class="deco" src="~@/assets/image/technology/斜紋.png" alt="斜紋裝飾">
    </div>
</template>
<script>
export default {

    props: ['cTitle', 'eTitle']
}
</script>
<style scoped lang="scss">
.section-title {
    display: flex;
    justify-content: center;
    align-items: center;

    .deco {
        height: 17px;
        // width: 81px;
        width:3rem;
    }

    .padding {
        // padding-left: 35px;
        // padding-right: 35px;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    h2 {
        color: $white;
        text-align: center;
        font-size: $h2-s;
        // line-height: 40px;
        line-height: 2.3rem;

        &:nth-of-type(2) {
            color: transparent;
            -webkit-text-stroke: .3px $white;
            font-weight: 700;
        }
    }

    @media screen and (min-width: 700px) {

        h2 {
            font-size: $h2-m;
        }
    }

    @media screen and (min-width: 1024px) {
        h2 {
            font-size: $h2-l;
        }
    }
}

@keyframes planetRotate {
    0% {
        background-position: 0% center;
    }

    100% {
        background-position: -200% center;
    }
}
</style>