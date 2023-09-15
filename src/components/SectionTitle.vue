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
    .section-title{
            display: flex;
            justify-content: center;
            align-items: center;
            .deco{
                height: 17px;
                width: 81px;
            }
            .padding{
                padding-left: 35px;
                padding-right: 35px;
            }
            h2{
                color: $white;
                text-align: center;
                font-size: 36px;
                line-height: 40px;
                    &:nth-of-type(2){
                    color: transparent;
                    -webkit-text-stroke: .3px $white;
                    font-weight: 700;
                    }
            }
    }

</style>