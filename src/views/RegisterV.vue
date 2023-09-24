<template>
    <div class="all">
        <div class="imgSvg">
            <img src="../assets/image/register/sapcemanV.svg" alt="">
        </div>
        <p class="textE">{{ textE }}</p>
        <div class="contentT">
            <p>{{ bigtextC }}</p>
            <p>{{ textC }}</p>
        </div>
    </div>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_registerV";
</style>
<script>
    export default{     
        data() {
            return {
            textE:"SUCCESSFUL",
            bigtextC:"註冊成功",
            textC:"正在為您跳轉頁面",
            }
        },



    }


</script>


